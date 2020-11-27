const { readSync } = require('to-vfile');
const remark = require('remark-parse');
const directive = require('remark-directive');
const frontmatter = require('remark-frontmatter');
const addTests = require('./plugins/add-tests');
const replaceImports = require('./plugins/replace-imports');
const addFrontmatter = require('./plugins/add-frontmatter');
const addText = require('./plugins/add-text');
const addVideoQuestion = require('./plugins/add-video-question');
const addSeed = require('./plugins/add-seed');
const addSolution = require('./plugins/add-solution');
const tableAndStrikeThrough = require('./plugins/table-and-strikethrough');
const unified = require('unified');

// by convention, anything that adds to file.data has the name add<name>.
const processor = unified()
  // add the remark parser
  .use(remark)
  // modify the parser so that Github flavour tables and strikethroughs get
  // converted to 'delete' nodes
  .use(tableAndStrikeThrough)
  // directives are parsed into 'leafDirective' nodes and used for imports
  .use(directive)
  // convert the text at the top of the document (surrounded by ---) into a
  // 'yaml' node
  .use(frontmatter, ['yaml'])
  // extract the content from that 'yaml' node
  .use(addFrontmatter)
  // Any imports will be replaced (in the tree) with
  // the sub-tree of the target file. e.g.
  // ::import{component="Script" from="./file.path" }
  // means that file.path's tree will be inserted wherever
  // ::use{component="Script"}
  // appears.
  .use(replaceImports)
  // the final five plugins insert content into file.data
  .use(addText, ['description', 'instructions'])
  // TODO: rename test->hint everywhere? It should make things easier to reason
  // about.
  .use(addTests)
  .use(addVideoQuestion)
  .use(addSeed)
  .use(addSolution);

exports.parseMD = function parseMD(filename) {
  return new Promise((resolve, reject) => {
    const file = readSync(filename);
    const tree = processor.parse(file);
    processor.run(tree, file, function(err, node, file) {
      if (err) {
        err.message += ' in file ' + filename;
        reject(err);
      }
      delete file.contents;
      return resolve(file.data);
    });
  });
};
