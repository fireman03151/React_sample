exports.dasherize = function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-\.]/gi, '')
    .replace(/\:/g, '');
};

const supportedLangs = ['english', 'spanish'];
exports.supportedLangs = supportedLangs;
