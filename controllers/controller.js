const { resolve } = require('path');


const controllerContact = function (req, res) {
    exports.usersPage = (req, res) => {
        res.send(require('../views/contact'));
      }
};

const controllerServices = function (req, res) {
    //res.sendFile(resolve('public', 'services.html')); //chemin pour dossier public 
    res.send(require('../views/services')); //chemin pour generer les vues dans le dossier view
};

const controllerAccueil = function (req, res) {
   // res.sendFile(resolve('public', 'index.html'));
   res.send(require('../views/index'));
};

 

const controllerDefault = function (req, res) {
    //res.sendFile(resolve('public', 'page404.html'));
    res.send(require('../views/page404'));
};

module.exports = {

    controllerContact,
    controllerServices,
    controllerAccueil,
    controllerDefault
}