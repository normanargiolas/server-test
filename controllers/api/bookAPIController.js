let config = require('../../config/config');
const path = require('path');

/**  Mapping for:  **/
let urlPath = config.bookPath;  //  /book

module.exports = function (app) {
    app.get(urlPath + "/list", function (req, res) {
        console.log("**** get: /api/book/list****");
        res.render('index');
    });
};
