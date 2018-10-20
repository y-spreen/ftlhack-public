var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WhitelistEntry = new Schema({
    name: {
        type: String,
        required: true
    },
    regex: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('WhitelistEntry', WhitelistEntry);