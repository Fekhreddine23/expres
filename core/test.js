
/////////////////// EXPLICATION DES ETAPES POUR CONSTRUIRE SON PROPRE FRAMEWORK SANS EXPRESS.JS ////////////

// CORE/ESPREX.JS
const esprexApp = (req, res) => {
    // routing --> déclenchement du bon ctrl en fonction de l'url de la requête
    if(esprexApp.router.routes[req.url]) { //verifie ma bonne route 
        esprexApp.router.routes[req.url] (req, res) //dans l'objet routes de objet route injecte le chemin et la reponse
    }
    res.end('Mon App');
  };
  
  esprexApp.router = { routes: {}};

  /*
  
  esprexApp.router = { routes: {
  '/home': new Map([
    ['GET', () => {}],
    ['POST', () => {}],
    ['PUT', () => {}],
    ['PATCH', () => {}],
    ['DELETE', () => {}],
  ]),
  '/contact': new Map([
    ['GET', () => {}],
    ['POST', () => {}],
  ]),
}};
  
  
  */ 
  
  esprexApp.get = function(paramRoute, paramCtrl) { //fonction get a un chemin et une fonction de callback
    esprexApp.router.routes[paramRoute] = paramCtrl;
  };

  // POST method route
esprexApp.post = function(paramRoute, paramCtrl) { //fonction get a un chemin et une fonction de callback
    esprexApp.router.routes[paramRoute] = paramCtrl;
  };
  
  
  module.exports = function() { return esprexApp; }; // j'exporte la fonction esprexApp
  // APP.JS
  const app = esprexApp;
  
  app.get('/home', (request, response) => { response.end('Page Accueil'); });
  app.get('/contact', (request, response) => { response.end('Page Contact'); });


  app.post('/avis', (request, response) => { response.end('Page d\'avis'); }); //methode POST
  
  
  // BIN/WWW
  require('http')
    .createServer(app)
    .listen(7979);
  
  
  
  
  
  // Node détecte une requête HTTP sur le port de notre serveur HTTPS
  // --> Node exécute esprexApp
  //
  
  // Requête 1 --> GET /home --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 2 --> GET /contact --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 3 --> GET /services --> Node invoque la méthode --> esprexApp({}, {});


 // DEFI 1 --> Routing simple (méthode app.get)
 //DEFI 2 --> Routing avec prise en charge du verbe HTTP (méthods app.post, app.put.app.patch, etc.)
 //DEEFI 3 --> Configuration d'une route par défaut (pour tous les verbes mais non prioritaire: app.all)