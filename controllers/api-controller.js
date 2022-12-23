


const controllerAccueil = function(req,res){
    const data = require('./database/data.json')
    res.json({
        nbrOfUsers : data.users.length,
        users: data.users
    });
}


module.exports = {

 controllerAccueil
}