// FRAMEWORK
const router = { routes: {} };

function mainCtrl() {
    if (
        router.routes[requestFromNode.url]
        &&
        router.routes[requestFromNode.url].has(requestFromNode.method)
    ) {
        router.routes[requestFromNode.url].get(requestFromNode.method)(requestFromNode, responseFromNode);
    }
    else {
        console.log('Pas de route correspondante');
    }
}

function get(routeName, controller) {
    if (!router.routes[routeName]) {
        router.routes[routeName] = new Map([
            ['GET', controller]
        ]);
    }
    else {
        router.routes[routeName].set('GET', controller);
    }
}

function post(routeName, controller) {
    if (!router.routes[routeName]) {
        router.routes[routeName] = new Map([
            ['POST', controller]
        ]);
    }
    else {
        router.routes[routeName].set('POST', controller);
    }
}


// DEV
post('/contact', (req, res) => console.log('Contact Page POST', req.url));
get('/contact', (req, res) => console.log('Contact Page GET', req.url));


// NODE
const requestFromNode = { url: '/contact', method: 'GET' };
const responseFromNode = { end: () => { } };
mainCtrl();