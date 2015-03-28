var mongoose = require('mongoose');
var secrets = require('../config/secrets');

/**
 *
 * @type {exports.Schema}
 */


var ziplineSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    picture: String,
    video: String,
    codepenLink: String,
    details: Array
});

module.exports = mongoose.model('Zipline', ziplineSchema);
