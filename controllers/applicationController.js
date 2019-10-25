let config = require('../config/config');
const path = require('path');

/**  Mapping for:  **/
let urlPath = config.rootPath;  //root /

module.exports = function (app) {
    app.get(urlPath, function (req, res) {
        console.log("**** get / ****");
        res.render('index');
    });
};
