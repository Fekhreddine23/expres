/ROUTING
const express = require('express')
const router = express.Router()


router.get('/api/users', function(req,res){
    const data = require('./database/data.json')
    res.json({
        nbrOfUsers : data.users.length,
        users: data.users
    });
});
/**1/ Créer un dossier public/ dans lequel on aura:
  - Un fichier pour l'accueil (index.html)
  - Un fichier pour la page de services
  - Un fichier pour la page de contact

2/ Créer les routes en GET permettant de charger les fichier */
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
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');