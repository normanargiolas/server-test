var path = require('path');

const bodyParser = require('body-parser');
const cors = require('cors');

let config = require('./config');


module.exports = function (app, express, route, port, hostname, prefix) {

    /**Used only as a last resort to not shutdown the server**/
    process.on('uncaughtException', function (err) {
        console.log('Caught exception: ', err);
        console.log('Caught exception: ', err);
    });

    app.set('port', port);
    app.set('hostname', hostname);

    // view engine setup
    app.set('views', config.views);
    app.engine(config.engine, require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(express.static(path.join('views')));

    // parse application/json
    app.use(bodyParser.json());

    app.use(prefix, route);

    route.use(cors());
    app.use(cors());
    app.listen(port, hostname);
    console.log(`API listening on http://${hostname}:${port}`);

    function normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }

};
