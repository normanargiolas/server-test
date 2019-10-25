let config = require('../../config/config');
const path = require('path');

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const userRepository = require('../../repositories/userRepository.js');


/**  Mapping for:  **/
let urlPath = config.userPath;  //  /user

module.exports = function (app, firebase) {

    app.post(urlPath + "/add", jsonParser, function (req, res) {
        console.log("**** post: /api/user/add****");

        let nome = req.body.nome;
        let cognome = req.body.cognome;
        let email = req.body.email;

        userRepository.create(nome, cognome, email).then(() => {
            console.log('user written to database');
            res.send('ok');
        }).catch(e => {
            console.log(e);
            res.status(400).json({
                result: "KO",
                error: "Error adding user!",
                description: e
            });
        });

    });

    app.post(urlPath + "/update", jsonParser, function (req, res) {
        console.log("**** post: /api/user/update****");

        let id = req.body.id;
        let nome = req.body.nome;
        let cognome = req.body.cognome;
        let email = req.body.email;

        userRepository.update(id, nome, cognome, email).then(() => {
            console.log('user updated to database');
            res.send('ok');
        }).catch(e => {
            console.log(e);
            res.status(400).json({
                result: "KO",
                error: "Error updating user!",
                description: e
            });
        });

    });

    app.post(urlPath + "/delete", jsonParser, function (req, res) {
        console.log("**** post: /api/user/delete****");

        let id = req.body.id;
        res.send('ok');

        // userRepository.delete(id).then(() => {
        //     console.log('user deleted to database');
        //     res.send('ok');
        // }).catch(e => {
        //     console.log(e);
        //     res.status(400).json({
        //         result: "KO",
        //         error: "Error deleting user!",
        //         description: e
        //     });
        // });

    });

    app.get(urlPath + "/findAll", jsonParser, function (req, res) {
        console.log("**** get: /api/user/findAll****");

        userRepository.findAll().then((obj) => {
            console.log('user fetched to database');
            res.send(obj);
        }).catch(e => {
            console.log(e);
            res.status(400).json({
                result: "KO",
                error: "Error getting users!",
                description: e
            });
        });
    });

    app.get(urlPath + "/findById", jsonParser, function (req, res) {
        console.log("**** get: /api/user/findById****");

        let id = req.query.id;

        userRepository.findById(id).then((obj) => {
            console.log('user fetched to database');
            res.send(obj);
        }).catch(e => {
            console.log(e);
            res.status(400).json({
                result: "KO",
                error: "Error getting user by id!",
                description: e
            });
        });
    });

    app.get(urlPath + "/findByEmail", jsonParser, function (req, res) {
        console.log("**** get: /api/user/findByEmail****");

        let email = req.query.email;

        userRepository.findByEmail(email).then((obj) => {
            console.log('user fetched to database');
            res.send(obj);
        }).catch(e => {
            console.log(e);
            res.status(400).json({
                result: "KO",
                error: "Error getting user by email!",
                description: e
            });
        });
    });
};
