const esprex = require('./core/esprex');
const app = esprex();

app.get('/', (req, res) => {
  res.end('Home Page');
});

app.get('/contact', (req, res) => {
  res.end('Contact Page');
});


app.get('/services', (req, res) => {
    res.end('Services');
  });   

module.exports = app;