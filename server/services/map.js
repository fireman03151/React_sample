import { Observable } from 'rx';
import { Schema, valuesOf, arrayOf, normalize } from 'normalizr';
import { nameify, dasherize, unDasherize } from '../utils';
import debug from 'debug';

const isDev = process.env.NODE_ENV !== 'production';
const isBeta = !!process.env.BETA;
const challengesRegex = /^(bonfire|waypoint|zipline|basejump|checkpoint)/i;
const log = debug('fcc:challenges');
const challenge = new Schema('challenge', { idAttribute: 'dashedName' });
const block = new Schema('block', { idAttribute: 'dashedName' });
const superBlock = new Schema('superBlock', { idAttribute: 'dashedName' });

block.define({
  challenges: arrayOf(challenge)
});

superBlock.define({
  blocks: arrayOf(block)
});

const mapSchema = valuesOf(superBlock);

/*
 * interface ChallengeMap {
 *   result: [superBlockDashedName: String]
 *   entities: {
 *     superBlock: {
 *       [superBlockDashedName: String]: {
 *          blocks: [blockDashedName: String]
 *        }
 *     },
 *     block: {
 *       [blockDashedName: String]: {
 *         challenges: [challengeDashedName: String]
 *       }
 *     },
 *     challenge: {
 *       [challengeDashedName: String]: Challenge
 *     }
 *   }
 * }
 */
function cachedMap(Block) {
  const query = {
    include: 'challenges',
    order: ['superOrder ASC', 'order ASC']
  };
  return Block.find$(query)
    .flatMap(blocks => Observable.from(blocks.map(block => block.toJSON())))
    .reduce((map, block) => {
      if (map[block.superBlock]) {
        map[block.superBlock].blocks.push(block);
      } else {
        map[block.superBlock] = {
          title: block.superBlock,
          order: block.superOrder,
          name: nameify(block.superBlock),
          dashedName: dasherize(block.superBlock),
          blocks: [block]
        };
      }
      return map;
    }, {})
    .map(map => normalize(map, mapSchema))
    .map(map => {
      // make sure challenges are in the right order
      map.entities.block = Object.keys(map.entities.block)
        // turn map into array
        .map(key => map.entities.block[key])
        // perform re-order
        .map(block => {
          block.challenges = block.challenges.reduce((accu, dashedName) => {
            const index = map.entities.challenge[dashedName].suborder;
            accu[index - 1] = dashedName;
            return accu;
          }, []);
          return block;
        })
        // turn back into map
        .reduce((blockMap, block) => {
          blockMap[block.dashedName] = block;
          return blockMap;
        }, {});
      return map;
    })
    .map(map => {
      // re-order superBlocks result
      const result = Object.keys(map.result).reduce((result, supName) => {
        const index = map.entities.superBlock[supName].order;
        result[index] = supName;
        return result;
      }, []);
      return {
        ...map,
        result
      };
    })
    .shareReplay();
}

function shouldNotFilterComingSoon({ isComingSoon, isBeta: challengeIsBeta }) {
  return isDev ||
    !isComingSoon ||
    (isBeta && challengeIsBeta);
}

function getFirstChallenge(challengeMap$) {
  return challengeMap$
    .map(({ entities: { superBlock, block, challenge }, result }) => {
      return challenge[
        block[
          superBlock[
            result[0]
          ].blocks[0]
        ].challenges[0]
      ];
    });
}

// this is a hard search
// falls back to soft search
function getChallengeAndBlock(
  challengeDashedName,
  blockDashedName,
  challengeMap$
) {
  return challengeMap$
    .flatMap(({ entities }) => {
      const block = entities.block[blockDashedName];
      const challenge = entities.challenge[challengeDashedName];
      if (
        !block ||
        !challenge ||
        !shouldNotFilterComingSoon(challenge)
      ) {
        return getChallengeByDashedName(challengeDashedName, challengeMap$);
      }
      return Observable.just({
        redirect: block.dashedName !== blockDashedName ?
          `/challenges/${block.dashedName}/${challenge.dashedName}` :
          false,
        entities: {
          challenge: {
            [challenge.dashedName]: challenge
          }
        },
        result: {
          block: block.dashedName,
          challenge: challenge.dashedName
        }
      });
    });
}

function getChallengeByDashedName(dashedName, challengeMap$) {
  const challengeName = unDasherize(dashedName)
    .replace(challengesRegex, '');
  const testChallengeName = new RegExp(challengeName, 'i');
  log('looking for %s', testChallengeName);

  return challengeMap$
    .map(({ entities }) => entities.challenge)
    .flatMap(challengeMap => {
      return Observable.from(Object.keys(challengeMap))
        .map(key => challengeMap[key]);
    })
    .filter(challenge => {
      return shouldNotFilterComingSoon(challenge) &&
        testChallengeName.test(challenge.name);
    })
    .last({ defaultValue: null })
    .flatMap(challengeOrNull => {
      if (challengeOrNull) {
        return Observable.just(challengeOrNull);
      }
      return getFirstChallenge(challengeMap$);
    })
    .map(challenge => ({
      redirect:
        `/challenges/${challenge.block}/${challenge.dashedName}`,
      entities: { challenge: { [challenge.dashedName]: challenge } },
      result: {
        challenge: challenge.dashedName,
        block: challenge.block
      }
    }));
}

export default function mapService(app) {
  const Block = app.models.Block;
  const challengeMap$ = cachedMap(Block);
  return {
    name: 'map',
    read: (req, resource, { block, dashedName } = {}, config, cb) => {
      if (block && dashedName) {
        return getChallengeAndBlock(dashedName, block, challengeMap$)
          .subscribe(challenge => cb(null, challenge), cb);
      }
      if (dashedName) {
        return getChallengeByDashedName(dashedName, challengeMap$)
          .subscribe(challenge => cb(null, challenge), cb);
      }
      return challengeMap$.subscribe(map => cb(null, map), cb);
    }
  };
}
