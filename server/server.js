const http = require('http');
const app = require('./app')
const server = http.createServer(app);

server.listen(4000, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:4000');
});