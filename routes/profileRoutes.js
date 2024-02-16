const route = require('express').Router();

route.get('/', (req, res) => {

    console.log(req);
    try {
       if(req){
        res.send(200, {message: "I knew you remembered"});
       } 
    } catch (error) {
        res.send(404, {message: "Couldn't find what you were looking for!"});
    }
})

module.exports = route