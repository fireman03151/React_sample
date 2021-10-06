const { ESLint } = require('eslint');

const cli = new ESLint();

// if a lot of files are changed, it's faster to run prettier/eslint on the
// whole project than to run them on each file separately
module.exports = {
  '*.(js|ts|tsx)': files =>
    files.length > 10
      ? ['eslint --max-warnings=0 --cache --fix .', 'prettier --write .']
      : [
          'eslint --max-warnings=0 --cache --fix ' +
            files.filter(file => !cli.isPathIgnored(file)).join(' '),
          ...files.map(filename => `prettier --write '${filename}'`)
        ],
  '*.!(js|ts|tsx)': files =>
    files.length > 10
      ? 'prettier --write .'
      : files.map(
          filename => `prettier --write --ignore-unknown '${filename}'`
        ),
  './curriculum/challenges/**/*.md': files =>
    files.length > 10
      ? 'npm run lint:challenges'
      : files.map(
          filename => `node ./tools/scripts/lint/index.js '${filename}'`
        )
};
