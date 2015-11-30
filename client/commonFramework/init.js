window.common = (function(global) {
  // common namespace
  // all classes should be stored here
  // called at the beginning of dom ready
  const {
    common = { init: [] }
  } = global;

  common.head = common.head || [];
  common.tail = common.tail || [];
  common.salt = Math.random();

  common.challengeTypes = {
    HTML: '0',
    JS: '1',
    VIDEO: '2',
    ZIPLINE: '3',
    BASEJUMP: '4',
    BONFIRE: '5',
    HIKES: '6',
    STEP: '7'
  };


  common.arrayToNewLineString = function arrayToNewLineString(seedData) {
    seedData = Array.isArray(seedData) ? seedData : [seedData];
    return seedData.reduce(function(seed, line) {
      return '' + seed + line + '\n';
    }, '');
  };

  common.seed = common.arrayToNewLineString(common.challengeSeed);

  common.replaceScriptTags = function replaceScriptTags(value) {
    return value
      .replace(/<script>/gi, 'fccss')
      .replace(/<\/script>/gi, 'fcces');
  };

  common.replaceSafeTags = function replaceSafeTags(value) {
    return value
      .replace(/fccss/gi, '<script>')
      .replace(/fcces/gi, '</script>');
  };

  common.replaceFormActionAttr = function replaceFormAction(value) {
    return value.replace(/<form[^>]*>/, function(val) {
      return val.replace(/action(\s*?)=/, 'fccfaa$1=');
    });
  };

  common.replaceFccfaaAttr = function replaceFccfaaAttr(value) {
    return value.replace(/<form[^>]*>/, function(val) {
      return val.replace(/fccfaa(\s*?)=/, 'action$1=');
    });
  };

  common.scopejQuery = function scopejQuery(str) {
    return str
      .replace(/\$/gi, 'j$')
      .replace(/document/gi, 'jdocument')
      .replace(/jQuery/gi, 'jjQuery');
  };

  common.unScopeJQuery = function unScopeJQuery(str) {
    return str
      .replace(/j\$/gi, '$')
      .replace(/jdocument/gi, 'document')
      .replace(/jjQuery/gi, 'jQuery');
  };

  const commentRegex = /(\/\*[^(\*\/)]*\*\/)|([ \n]\/\/[^\n]*)/g;
  common.removeLogs = function removeComments(str) {
    return str.replace(commentRegex, '');
  };

  const logRegex = /(console\.[\w]+\s*\(.*\;)/g;
  common.removeLogs = function removeLogs(str) {
    return str.replace(logRegex, '');
  };

  common.reassembleTest = function reassembleTest(code = '', { line, text }) {
    var regexp = new RegExp('\/\/' + line + common.salt);
    return code.replace(regexp, text);
  };

  return common;
})();

