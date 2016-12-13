const express = require('express');
const router = express.Router();
const passport = require('../auth/local');
const helpers = require('../auth/helpers')

router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        console.log(req.session)
    });


router.post('/register', helpers.createUser)

module.exports = router

