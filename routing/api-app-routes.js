const { resolve } = require('path');
const router = require('express').Router();

//destructuration methode controllerAccueil
const {controllerAccueil} = require('../controllers/api-controller.js'); 

router.get('/api/users', controllerAccueil );

module.exports = router;