const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');
const router = require('./routing');
 
 

//CONFIGURATION GENERALE
app.use(express.static(resolve('public'), {index: false}));

app.use(router);
 
module.exports = app;