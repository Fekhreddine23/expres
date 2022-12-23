const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');
const router = express.Router();

const {appRoutes, apiRouter} = require('./routing/index');
 



//CONFIGURATION GENERALE
app.use(express.static(resolve('public')));
app.use(appRoutes )
app.use(apiRouter ) 


module.exports = app;