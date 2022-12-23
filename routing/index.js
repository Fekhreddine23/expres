const router = require('express').Router(); //initialise le router

const appRouter = require('./app-routes.js'); //appelle les fichiers routers

const apiRouter = require('./api-app-routes.js')
const {controllerDefault} = require('../controllers/controller') //destructuration de la methode controllerDefault

router.use(appRouter); //je fais le lien entre objet router et le fichier app-routes.js

router.use(apiRouter);

router.get('*',  controllerDefault ); //passe a la fin les routes par defauts

module.exports = router;