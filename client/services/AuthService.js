import request from 'superagent/lib/client'

const LOGIN_URL = '/login'

var AuthService = {
    login: (username, password) => {
        return new Promise((resolve, reject) => {
            request
                .post(LOGIN_URL)
                .send({username, password})
                .withCredentials()
                .end((err, response) => {


                    console.log('service', username, password, err, response)

                    if (err) return reject(err);
                    return resolve(JSON.parse(response.text));
                })
        });
    }
}

module.exports = AuthService