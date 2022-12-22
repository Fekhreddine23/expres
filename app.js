const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');
const router = express.Router();

const appRoutes = require('./routing/app-routes');
const appApiRoutes = require('./routing/api-app-routes');



//CONFIGURATION GENERALE
app.use(express.static(resolve('public')));
app.use(appRoutes )
app.use(appApiRoutes ) 


module.exports = app;