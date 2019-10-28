// require('dotenv').config();

let express = require('express');
let http = require('http');
// let firebase = require('firebase');


let app = express();
let routes = express.Router();
let server = http.createServer(app);


require('./config/express')(app, express, routes, process.env.api_server_port, process.env.api_server_host, process.env.api_server_prefix);
require('./config/www')(server);
// require('./config/firebase')(firebase);


/** Define here other controllers and injects the services**/
require('./controllers/applicationController')(app);

// require('./controllers/api/userAPIController')(routes, firebase);
require('./controllers/api/bookAPIController')(routes);

/** Last controller Error Handler**/
require('./controllers/errorHandlerController')(app);

