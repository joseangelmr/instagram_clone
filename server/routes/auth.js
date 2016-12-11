const express = require('express');
const router = express.Router();
const passport = require('../auth/local');

router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        console.log(req.session)
    });

module.exports = router

