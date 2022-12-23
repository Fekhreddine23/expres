
const { resolve } = require('path');

const router = require('express').Router();

//import des fonctions callbacks
const {controllerContact, controllerServices,controllerAccueil, controllerDefault} = require('../controllers/controller.js');
 
 /*/ Créer les routes en GET permettant de charger les fichier */
router.get('/contact', controllerContact );

router.get('/services', controllerServices );

router.get('/index',  controllerAccueil )
 


//add the router
  


module.exports = router;