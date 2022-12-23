const { resolve } = require('path');


const controllerContact = function (req, res) {
    res.sendFile(resolve('public', 'contact.html'));
};

const controllerServices = function (req, res) {
    res.sendFile(resolve('public', 'services.html'));
};

const controllerAccueil = function (req, res) {
    res.sendFile(resolve('public', 'index.html'));
};


const controllerDefault = function (req, res) {
    res.sendFile(resolve('public', 'page404.html'));
};

module.exports = {

    controllerContact,
    controllerServices,
    controllerAccueil,
    controllerDefault
}