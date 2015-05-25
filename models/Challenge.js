var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */

var challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  difficulty: String,
  description: Array,
  tests: Array,
  challengeSeed: Array,
  challengeType: Number, // 0 = html, 1 = javascript only, 2 = video, 3 = zipline, 4 = basejump
  MDNlinks: Array
});

module.exports = mongoose.model('Challenge', challengeSchema);
