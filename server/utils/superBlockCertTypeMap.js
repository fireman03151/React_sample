import certTypes from './certTypes.json';

const superBlockCertTypeMap = {
  // legacy
  'legacy-front-end': certTypes.frontEnd,
  'legacy-back-end': certTypes.backEnd,
  'legacy-data-visualization': certTypes.dataVis,
  'legacy-full-stack': certTypes.fullStack,

  // modern
  'responsive-web-design': certTypes.respWebDesign,
  'javascript-algorithms-and-data-structures': certTypes.jsAlgoDataStruct,
  'front-end-libraries': certTypes.frontEndLibs,
  'data-visualization': certTypes.dataVis2018,
  'apis-and-microservices': certTypes.apisMicroservices,
  'information-security-and-quality-assurance': certTypes.infosecQa
};

export default superBlockCertTypeMap;
