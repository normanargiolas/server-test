const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const collectionName = 'users';
let collection = db.collection(collectionName);

module.exports = {

    create: function (nome, cognome, email) {
        // let collection = db.collection(collectionName);
        const docRef = collection.doc();
        return docRef.set({
            id: docRef.id,
            nome: nome,
            email: email,
            cognome: cognome
        });
    },

    update: function (id, nome, cognome, email) {
        // let collection = db.collection(collectionName);
        return collection.doc(id).update({
            nome: nome,
            cognome: cognome,
            email: email
        });
    },

    delete: function (id) {
        return collection.doc(id).delete();
    },

    findAll: function () {
        return collection.get().then((querySnapshot) => {
            return querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });
        });
    },

    findById: function (id) {
        return collection
            .doc(id)
            .get()
            .then((documentSnapshot) => {
                return documentSnapshot.data();
            });
    },

    findByEmail: function (email) {
        return collection
            .where('email', '==', email)
            .get()
            .then((querySnapshot) => {
                const result = querySnapshot.docs.map(function (documentSnapshot) {
                    return documentSnapshot.data();
                });
                if (result.length > 1) {
                    throw new Error('Multiple results found');
                }
                return result.length == 1 ? (result[0]) : null;
            });
    }

};
