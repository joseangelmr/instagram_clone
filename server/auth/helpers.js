var jwt = require('jwt-simple')
var CONST = require('./../constants/constants').consts;
const User = require('./../models/users').User

function createUser(req, res) {
    return handleErrors(req)
        .then(() => {
            var user = new User(req.body)
            user.save().then(function () {
                return user.save();
            }).then(function (doc) {
                res.status(200).json({
                    message: CONST.SUCCESS_REGISTER,
                    token: jwt.encode(doc, CONST.SECRET_KEY),
                    username: doc.username,
                    name: doc.name,
                    lastName: doc.lastName
                });
            }, function (err) {
            });
        })
        .catch((err) => {
            res.status(409).json({message: err.message});
        });
}

function handleErrors(req) {

    return new Promise((resolve, reject) => {

        User.findOne({username: req.body.username}, (err, user) => {
            if (err) {
                reject({message: CONST.INTERNAL_ERROR})
            }
            else if (user) {
                reject({message: CONST.USER_NOT_AVAILABLE});
            }
            else if (req.body.username.length < 3) {
                reject({
                    message: 'Username must be longer than 6 characters'
                });
            }
            else if (req.body.password.length < 5) {
                reject({
                    message: 'Password must be longer than 6 characters'
                });
            } else {
                resolve();
            }
        })
    });
}

module.exports = {
    createUser
};