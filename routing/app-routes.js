
const { resolve } = require('path');

const router = require('express').Router();

const controllerApp = require('../controllers/controller.js');
 
 /*/ Créer les routes en GET permettant de charger les fichier */
router.get('/contact', controllerApp.controllerContact );

router.get('/services', controllerApp.controllerServices );

router.get('/index', controllerApp.controllerAccueil )
 
router.get('*', controllerApp.controllerDefault );

//add the router
 


module.exports = router;