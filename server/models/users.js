var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
    username: {type: String, required: true, maxlength: [20, "User max length"]},
    password: {type: String, required: true, minlength: [4, "Password min length"]},
    name: {type: String, required: true},
    lastName: {type: String, required: true}
})

User.methods.checkPassword = function (password) {
    return (password === this.password);
};

User.plugin(passportLocalMongoose);


module.exports.User = mongoose.model("User", User)