const { resolve } = require('path');
const router = require('express').Router();


router.get('/api/users', function(req,res){
    const data = require('./database/data.json')
    res.json({
        nbrOfUsers : data.users.length,
        users: data.users
    });
});

module.exports = router;