const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const { challengeTypes } = require('../../shared/config/challenge-types');
const {
  availableCharacters,
  availableBackgrounds,
  availableAudios,
  availableAlignments
} = require('./scene-assets');

const slugRE = new RegExp('^[a-z0-9-]+$');
const slugWithSlashRE = new RegExp('^[a-z0-9-/]+$');

const fileJoi = Joi.object().keys({
  fileKey: Joi.string(),
  ext: Joi.string(),
  name: Joi.string(),
  editableRegionBoundaries: [Joi.array().items(Joi.number())],
  path: Joi.string(),
  error: Joi.valid(null),
  head: Joi.string().allow(''),
  tail: Joi.string().allow(''),
  seed: Joi.string().allow(''),
  contents: Joi.string().allow(''),
  id: Joi.string().allow(''),
  history: Joi.array().items(Joi.string().allow(''))
});

const prerequisitesJoi = Joi.object().keys({
  id: Joi.objectId().required(),
  title: Joi.string().required()
});

const positionJoi = Joi.object().keys({
  x: Joi.number().required().strict(),
  y: Joi.number().required().strict(),
  z: Joi.number().required().strict()
});

const setupCharacterJoi = Joi.object().keys({
  character: Joi.string()
    .valid(...availableCharacters)
    .required(),
  position: positionJoi.required(),
  opacity: Joi.number().strict()
});

const setupAudioJoi = Joi.object().keys({
  filename: Joi.string()
    .valid(...availableAudios)
    .required(),
  startTime: Joi.number().required().strict(),
  startTimestamp: Joi.number().strict(),
  finishTimestamp: Joi.number().strict()
});

const setupJoi = Joi.object().keys({
  background: Joi.string()
    .valid(...availableBackgrounds)
    .required(),
  characters: Joi.array().items(setupCharacterJoi).min(1).required(),
  audio: setupAudioJoi.required(),
  alwaysShowDialogue: Joi.boolean()
});

const DialogueJoi = Joi.object().keys({
  text: Joi.string().required(),
  align: Joi.string().valid(...availableAlignments)
});

const commandJoi = Joi.object().keys({
  background: Joi.string().valid(...availableBackgrounds),
  character: Joi.string()
    .valid(...availableCharacters)
    .required(),
  position: positionJoi,
  opacity: Joi.number().strict(),
  startTime: Joi.number().required().strict(),
  finishTime: Joi.number().strict(),
  dialogue: DialogueJoi
});

const schema = Joi.object()
  .keys({
    audioPath: Joi.string(),
    block: Joi.string().regex(slugRE).required(),
    blockId: Joi.objectId(),
    challengeOrder: Joi.number(),
    removeComments: Joi.bool().required(),
    certification: Joi.string().regex(slugWithSlashRE),
    challengeType: Joi.number().min(0).max(22).required(),
    checksum: Joi.number(),
    // TODO: require this only for normal challenges, not certs
    dashedName: Joi.string().regex(slugRE),
    description: Joi.when('challengeType', {
      is: [
        challengeTypes.step,
        challengeTypes.video,
        challengeTypes.fillInTheBlank
      ],
      then: Joi.string().allow(''),
      otherwise: Joi.string().required()
    }),
    disableLoopProtectTests: Joi.boolean().required(),
    disableLoopProtectPreview: Joi.boolean().required(),
    challengeFiles: Joi.array().items(fileJoi),
    guideUrl: Joi.string().uri({ scheme: 'https' }),
    hasEditableBoundaries: Joi.boolean(),
    helpCategory: Joi.valid(
      'JavaScript',
      'HTML-CSS',
      'Python',
      'Backend Development',
      'C-Sharp',
      'English',
      'Odin',
      'Euler',
      'Rosetta'
    ),
    videoUrl: Joi.string().allow(''),
    fillInTheBlank: Joi.object().keys({
      sentence: Joi.string().required(),
      blanks: Joi.array()
        .items(
          Joi.object().keys({
            answer: Joi.string().required(),
            feedback: Joi.string().allow(null)
          })
        )
        .required()
    }),
    forumTopicId: Joi.number(),
    id: Joi.objectId().required(),
    instructions: Joi.string().allow(''),
    isComingSoon: Joi.bool(),
    isLocked: Joi.bool(),
    isPrivate: Joi.bool(),
    msTrophyId: Joi.when('challengeType', {
      is: [challengeTypes.msTrophy],
      then: Joi.string().required()
    }),
    notes: Joi.string().allow(''),
    order: Joi.number(),
    prerequisites: Joi.when('challengeType', {
      is: [challengeTypes.exam],
      then: Joi.array().items(prerequisitesJoi)
    }),
    // video challenges only:
    videoId: Joi.when('challengeType', {
      is: [challengeTypes.video],
      then: Joi.string().required()
    }),
    videoLocaleIds: Joi.when('challengeType', {
      is: challengeTypes.video,
      then: Joi.object().keys({
        espanol: Joi.string(),
        italian: Joi.string(),
        portuguese: Joi.string()
      })
    }),
    bilibiliIds: Joi.when('challengeType', {
      is: challengeTypes.video,
      then: Joi.object().keys({
        aid: Joi.number().required(),
        bvid: Joi.string().required(),
        cid: Joi.number().required()
      })
    }),
    question: Joi.object().keys({
      text: Joi.string().required(),
      answers: Joi.array()
        .items(
          Joi.object().keys({
            answer: Joi.string().required(),
            feedback: Joi.string().allow(null)
          })
        )
        .required(),
      solution: Joi.number().required()
    }),
    required: Joi.array().items(
      Joi.object().keys({
        link: Joi.string(),
        raw: Joi.bool(),
        src: Joi.string(),
        crossDomain: Joi.bool()
      })
    ),
    assignments: Joi.when('challengeType', {
      is: challengeTypes.dialogue,
      then: Joi.array().items(Joi.string()).required(),
      otherwise: Joi.array().items(Joi.string())
    }),
    scene: Joi.object().keys({
      setup: setupJoi.required(),
      commands: Joi.array().items(commandJoi)
    }),
    solutions: Joi.array().items(Joi.array().items(fileJoi).min(1)),
    superBlock: Joi.string().regex(slugWithSlashRE),
    superOrder: Joi.number(),
    suborder: Joi.number(),
    tests: Joi.array().items(
      // public challenges
      Joi.object().keys({
        id: Joi.string().allow(''),
        text: Joi.string().required(),
        testString: Joi.string().allow('').required()
      }),
      // our tests used in certification verification
      Joi.object().keys({
        id: Joi.string().required(),
        title: Joi.string().required()
      })
    ),
    template: Joi.string().allow(''),
    time: Joi.string().allow(''),
    title: Joi.string().required(),
    translationPending: Joi.bool().required(),
    url: Joi.when('challengeType', {
      is: [challengeTypes.codeAllyPractice, challengeTypes.codeAllyCert],
      then: Joi.string().required()
    }),
    usesMultifileEditor: Joi.boolean()
  })
  .xor('helpCategory', 'isPrivate');

exports.challengeSchemaValidator = () => {
  return challenge => schema.validate(challenge);
};
