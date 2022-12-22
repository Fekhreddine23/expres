
const { resolve } = require('path');

const router = require('express').Router();
 
 /*/ Créer les routes en GET permettant de charger les fichier */
router.get('/contact', controllerContact );

router.get('/services', controllerServices );

router.get('/index', controllerAccueil )
 
router.get('*', controllerDefault );

//add the router
 


module.exports = router;