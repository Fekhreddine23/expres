
const { resolve } = require('path');

const controllerAccueil = function(req,res){
    const data = require('../database/data.json')
    console.log(data);
    res.json({
        nbrOfUsers : data.users.length,
        users: data.users
    });
}


module.exports = {

 controllerAccueil
}