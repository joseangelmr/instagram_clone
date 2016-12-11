(function (routeConfig) {

    routeConfig.init = (app) => {

        const routes = require('../routes/index');
        const authRoutes = require('../routes/auth');

        app.use('/', routes);
        app.use('/', authRoutes);
        
    }

})(module.exports);
