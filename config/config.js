const path = require('path');


const defaults = {
    /**Global Configuration**/
    root: path.join(__dirname, '..'),
    rootPath: "/",

    /**Server Express Path Config**/
    views: path.join(__dirname, '..', 'views'),
    resources: path.join(__dirname, '..', 'views/css'),
    engine: 'html',

    /**Controller Configuration**/
    userPath: "/user",
    bookPath: "/book"
};

module.exports = defaults;
