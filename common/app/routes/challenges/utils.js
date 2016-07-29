import { compose } from 'redux';
import { bonfire, html, js } from '../../utils/challengeTypes';

export function encodeScriptTags(value) {
  return value
    .replace(/<script>/gi, 'fccss')
    .replace(/<\/script>/gi, 'fcces');
}

export function decodeSafeTags(value) {
  return value
    .replace(/fccss/gi, '<script>')
    .replace(/fcces/gi, '</script>');
}

export function encodeFormAction(value) {
  return value.replace(
    /<form[^>]*>/,
    val => val.replace(/action(\s*?)=/, 'fccfaa$1=')
  );
}

export function decodeFccfaaAttr(value) {
  return value.replace(
    /<form[^>]*>/,
    val => val.replace(/fccfaa(\s*?)=/, 'action$1=')
  );
}

export function arrayToString(seedData = ['']) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

export function buildSeed({ challengeSeed = [] } = {}) {
  return compose(
    decodeSafeTags,
    arrayToString
  )(challengeSeed);
}

const pathsMap = {
  [html]: 'html',
  [js]: 'js',
  [bonfire]: 'js'
};

export function getPreFile({ challengeType }) {
  return {
    name: 'index',
    ext: pathsMap[challengeType] || 'html',
    key: getFileKey({ challengeType })
  };
}

export function getFileKey({ challengeType }) {
  return 'index' + (pathsMap[challengeType] || 'html');
}

export function createTests({ tests = [] }) {
  return tests
    .map(test => ({
      text: ('' + test).split('message: ').pop().replace(/\'\);/g, ''),
      testString: test
    }));
}

export function loggerToStr(args) {
  args = Array.isArray(args) ? args : [args];
  return args
    .map(arg => typeof arg === 'undefined' ? 'undefined' : arg)
    .map(arg => {
      if (typeof arg !== 'string') {
        return JSON.stringify(arg);
      }
      return arg;
    })
    .reduce((str, arg) => str + arg + '\n', '');
}

export function getFirstChallenge(
  { superBlock, block, challenge },
  result
) {
  return challenge[
    block[
      superBlock[
        result[0]
      ].blocks[0]
    ].challenges[0]
  ];
}

export function getNextChallenge(
  current,
  entites,
  superBlocks
) {
  const { challenge: challengeMap, block: blockMap } = entites;
  // find current challenge
  // find current block
  // find next challenge in block
  const currentChallenge = challengeMap[current];
  if (currentChallenge) {
    const block = blockMap[currentChallenge.block];
    const index = block.challenges.indexOf(currentChallenge.dashedName);
    return challengeMap[block.challenges[index + 1]];
  }
  return getFirstChallenge(entites, superBlocks);
}
