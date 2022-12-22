const esprexApp = (req, res) => {
    const { router: { routes } } = esprexApp;

    if (routes[req.url]) {
        routes[req.url](req, res);
    }
    else {
        res.end('Page not found.');
    }
};

esprexApp.router = { routes: {} };


esprexApp.router = {
    routes: {
        '/home': new Map([
            ['GET', () => { }],
            ['POST', () => { }],
            ['PUT', () => { }],
            ['PATCH', () => { }],
            ['DELETE', () => { }],
        ]),
        '/contact': new Map([
            ['GET', () => { }],
            ['POST', () => { }],
        ]),
    }
};



esprexApp.all = function (routeName, controller, method) {
    const route = esprexApp.router.routes[routeName];
    if (!route) {
        esprexApp.router.routes[routeName] = new Map([
            [method, controller]
        ]);
    }
    else {
        route.set(method, controller);
    }
};




esprexApp.get = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'GET');
};
esprexApp.post = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'POST');
};
esprexApp.put = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'PUT');
};
esprexApp.patch = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'PATCH');
};
esprexApp.delete = function (routeName, controller) {
    esprexApp.all(routeName, controller, 'DELETE');
};


module.exports = () => esprexApp;