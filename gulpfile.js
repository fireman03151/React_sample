require('babel-core/register');
var Rx = require('rx'),
  gulp = require('gulp'),
  path = require('path'),

  // utils
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  reduce = require('gulp-reduce-file'),
  sortKeys = require('sort-keys'),
  debug = require('debug')('freecc:gulp'),

  // react app
  webpack = require('gulp-webpack'),
  webpackConfig = require('./webpack.config.js'),
  webpackConfigNode = require('./webpack.config.node.js'),

  // server process
  nodemon = require('gulp-nodemon'),
  sync = require('browser-sync'),

  // css
  less = require('gulp-less'),

  // rev
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),

  // lint
  jsonlint = require('gulp-jsonlint'),
  eslint = require('gulp-eslint');


Rx.config.longStackSupport = true;

var reloadDelay = 1000;
var reload = sync.reload;
var paths = {
  server: './server/server.js',
  serverIgnore: [
    'gulpfile.js',
    'public/',
    '!public/js/bundle*',
    'node_modules/',
    'client/',
    'server/rev-manifest.json'
  ],

  publicJs: './public/js',
  css: 'public/css',

  loopback: {
    client: './client/loopbackClient',
    root: path.join(__dirname, 'client/'),
    clientName: 'lbApp'
  },

  client: {
    src: './client',
    dest: 'public/js'
  },

  js: [
    'client/main.js',
    'client/iFrameScripts.js',
    'client/plugin.js'
  ],

  dependents: [
    'client/commonFramework.js',
    'client/sandbox.js'
  ],

  less: './client/less/main.less',

  manifest: 'server/manifests/',

  node: {
    src: './client',
    dest: 'common/app'
  },

  syncWatch: [
    'public/**/*.*'
  ],

  challenges: [
    'seed/challenges/*.json',
    'seed/under-construction/*.json'
  ]
};

var webpackOptions = {
  devtool: 'inline-source-map'
};

function errorHandler() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}

gulp.task('serve', function(cb) {
  var called = false;
  nodemon({
    script: paths.server,
    ext: '.js .json',
    ignore: paths.serverIgnore,
    exec: path.join(__dirname, 'node_modules/.bin/babel-node'),
    env: {
      'NODE_ENV': 'development',
      'DEBUG': process.env.DEBUG || 'freecc:*'
    }
  })
    .on('start', function() {
      if (!called) {
        called = true;
        setTimeout(function() {
          cb();
        }, reloadDelay);
      }
    })
    .on('restart', function(files) {
      if (files) {
        debug('Files that changes: ', files);
      }
      setTimeout(function() {
        debug('Restarting browsers');
        reload();
      }, reloadDelay);
    });
});

var syncDepenedents = [
  'serve',
  'js',
  'less',
  'dependents',
  'pack-client',
  'build-manifest'
];

gulp.task('sync', syncDepenedents, function() {
  sync.init(null, {
    proxy: 'http://localhost:3000',
    logLeval: 'debug',
    files: paths.syncWatch,
    port: 3001,
    open: false,
    reloadDelay: reloadDelay
  });
});

gulp.task('lint-js', function() {
  return gulp.src(['public/js/lib/**/*'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-json', function() {
  return gulp.src(paths.challenges)
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task('test-challenges', ['lint-json']);

gulp.task('pack-client', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(Object.assign(
      {},
      webpackConfig,
      webpackOptions
    )))
    .pipe(gulp.dest(webpackConfig.output.path))
    .pipe(rev())
    // copy files to public
    .pipe(gulp.dest(webpackConfig.output.path))
    // create and merge manifest
    .pipe(rev.manifest('react-manifest.json'))
    .pipe(gulp.dest(paths.manifest));
});

gulp.task('pack-watch', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(Object.assign(
      {},
      webpackConfig,
      webpackOptions,
      { watch: true }
    )))
    .pipe(gulp.dest(webpackConfig.output.path))
    .pipe(rev())
    // copy files to public
    .pipe(gulp.dest(webpackConfig.output.path))
    // create manifest
    .pipe(rev.manifest('react-manifest.json'))
    .pipe(gulp.dest(paths.manifest));
});

gulp.task('pack-node', function() {
  return gulp.src(webpackConfigNode.entry)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(webpack(webpackConfigNode))
    .pipe(gulp.dest(webpackConfigNode.output.path));
});

gulp.task('pack', ['pack-client', 'pack-node']);

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(plumber({ errorHandler: errorHandler }))
    // copile
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(paths.css))
    // add revision
    .pipe(rev())
    // copy files to public
    .pipe(gulp.dest(paths.css))
    // create and merge manifest
    .pipe(rev.manifest('css-manifest.json'))
    .pipe(gulp.dest(paths.manifest));
});

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(gulp.dest(paths.publicJs))
    // create registry file
    .pipe(rev())
    // copy revisioned assets to dest
    .pipe(gulp.dest(paths.publicJs))
    // create manifest file
    .pipe(rev.manifest('js-manifest.json'))
    // copy manifest file to dest
    .pipe(gulp.dest(paths.manifest));
});

// commonFramework depend on iFrameScripts
// sandbox depends on plugin
gulp.task('dependents', ['js'], function() {
  var manifest = gulp.src(
    path.join(__dirname, paths.manifest, 'js-manifest.json')
  );

  return gulp.src(paths.dependents)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(revReplace({ manifest: manifest }))
    .pipe(rev())
    .pipe(gulp.dest(paths.publicJs))
    .pipe(rev.manifest('dependents-manifest.json'))
    .pipe(gulp.dest(paths.manifest));
});

function collector(file, memo) {
  return Object.assign({}, JSON.parse(file.contents), memo);
}

function done(manifest) {
  return sortKeys(manifest);
}

function buildManifest() {
  return gulp.src(paths.manifest + '*.json')
    .pipe(reduce('rev-manifest.json', collector, done, {}))
    .pipe(gulp.dest('server/'));
}

var buildDependents = ['less', 'js', 'dependents'];

gulp.task('build-manifest', buildDependents, function() {
  return buildManifest();
});

gulp.task('build-manifest-watch', function() {
  return buildManifest();
});

gulp.task('build', [
  'less',
  'js',
  'dependents',
  'pack-client',
  'build-manifest'
]);

var watchDependents = [
  'less',
  'js',
  'dependents',
  'serve',
  'sync',
  'build-manifest'
];

gulp.task('watch', watchDependents, function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.challenges, ['test-challenges']);
  gulp.watch(paths.js, ['js', 'dependents']);
  gulp.watch(paths.dependents, ['dependents']);
  gulp.watch(paths.manifest + '/*.json', ['build-manifest-watch']);
});

gulp.task('default', ['less', 'serve', 'sync', 'watch', 'pack-watch']);

