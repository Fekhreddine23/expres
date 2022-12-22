
const { resolve } = require('path');
const router = require('express').Router();
 
 /*/ Créer les routes en GET permettant de charger les fichier */
router.get('/contact', function (req, res) {
    res.sendFile(path.resolve('public', 'contact.html'));
});

router.get('/services', function (req, res) {
    res.sendFile(path.resolve('public', 'services.html'));
});

router.get('*', function (req, res) { // * route par defaut TOUJOURS DECLARER A LA FIN
    res.sendFile(path.resolve('public', 'index.html'));
     
});

router.get('*', function (req, res) { // * route par defaut TOUJOURS DECLARER A LA FIN
    res.sendFile(path.resolve('public', 'page404.html'));
     
});

//add the router
 


module.exports = router;