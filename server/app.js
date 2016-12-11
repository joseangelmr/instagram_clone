(function () {
    const express = require('express')

    const app = express();
    const appCofig = require('./config/mainConfig.js');
    const routeCofig = require('./config/routeConfig.js');
    const connection = require('./connection.js');

    connection.init();
    appCofig.init(app, express)
    routeCofig.init(app)

    module.exports = app;


})()