const path = require('path');


module.exports = function (firebase) {
    const config = {
        apiKey: process.env.firebase_apiKey,
        databaseURL: process.env.firebase_databaseURL,
        projectId: process.env.firebase_projectId,
    };

    firebase.initializeApp(config);
};

