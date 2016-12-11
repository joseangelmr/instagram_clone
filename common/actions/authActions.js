var AuthService = require('./../../client/services/authService')

const actions = {
    userAuthenticate: (username, password) => (
        function (dispatch) {
            AuthService.login(username, password)
                .then(response => {
                    console.warn('response', response);
                })
                .catch(function (err) {
                    console.warn(err)
                });
        }
    )
};

module.exports = actions;