const esprexApp = (req, res) => {
    res.end('HTTPS');
  };
  
  module.exports = () => esprexApp;