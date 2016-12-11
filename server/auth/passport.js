const passport = require('passport');
var User = require('./../models/users.js').User
var jwt = require('jwt-simple')
var CONST = require('./../constants/constants').consts;


module.exports = () => {

    passport.serializeUser(function (user, cb) {

        const token = jwt.encode(user, CONST.SECRET_KEY)

        const userData = {
            name: user.name,
            lastName: user.lastName,
            token: token,
        }

        cb(null, userData);
    });

    passport.deserializeUser(function (id, cb) {

        User.findOne({id}, (err, user) => {

            if (err) {
                return cb(err);
            }

            cb(null, user);
        })

    });

};