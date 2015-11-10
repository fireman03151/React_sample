import _ from 'lodash';
import path from 'path';
import { Observable } from 'rx';

const basePath = process.cwd() + '/seed/challenges/';

export default function getFromDisk$(challenge) {
  delete require.cache[require.resolve(
    path.join(basePath, challenge.fileName)
  )];

  return Observable.just(require(path.join(basePath, challenge.fileName)))
    .map(challengeSpec => challengeSpec.challenges[challenge.suborder - 1])
    .map(challenge => {
      challenge.head = challenge.head || [];
      challenge.tail = challenge.tail || [];
      challenge.challengeType = '' + challenge.challengeType;

      challenge.name =
        _.capitalize(challenge.type) +
        ': ' +
        challenge.title.replace(/[^a-zA-Z0-9\s]/g, '');

      challenge.dashedName = challenge.name
        .toLowerCase()
        .replace(/\:/g, '')
        .replace(/\s/g, '-');

      return challenge;
    });
}
