(function (appConfig) {
    const webpack = require('webpack')
    const config = require('./../../webpack.config.js')
    const bodyParser = require('body-parser')
    const session = require('express-session')
    const constants = require('../constants/constants').consts
    const compiler = webpack(config)
    const passport = require('passport');


    appConfig.init = (app, express) => {

        app.use(require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath
        }));

        app.use(require('webpack-hot-middleware')(compiler));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        app.use(session({
            secret: constants.SECRET_SESSION_KEY,
            resave: false,
            saveUninitialized: false
        }))

        app.use(passport.initialize())
        app.use(passport.session());

    }

})(module.exports);
