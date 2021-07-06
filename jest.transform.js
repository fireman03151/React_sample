const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 14
        }
      }
    ],
    '@babel/react'
  ]
};

// TODO: is there a way to do this without a separate transform? i.e. can we
// just use the existing config?
module.exports = require('babel-jest').default.createTransformer(babelOptions);
