var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean,
    hasAccess: Boolean,
    Roles: String
}));
//# sourceMappingURL=user.js.map