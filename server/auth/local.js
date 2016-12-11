const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/users.js').User
const init = require('./passport');
var CONST = require('./../constants/constants').consts;


init();

passport.use(new LocalStrategy(
    function (username, password, cb) {

        User.findOne({username: username}, (err, user) => {

            if (err) {
                console.log(CONST.INTERNAL_ERROR, err)
                return cb(err);
            }

            if (!user) {
                console.log(CONST.USER_NOT_FOUND, err)
                return cb(null, false);
            }

            if (user.password == password) {
                console.log(CONST.USER_FOUND, user)
                return cb(null, user)
            } else {
                console.log(CONST.USER_PASS_NOT_FOUND, user)
                return cb(null, false);
            }
        })


    }));

module.exports = passport;