const { resolve } = require('path');
const router = require('express').Router();


const {controllerAccueil} = require('../controllers/api-controller.js'); //destructuration methode controllerAccueil

router.get('/api/users', controllerAccueil );

module.exports = router;