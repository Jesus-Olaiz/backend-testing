const express = require('express'); 
const server = express()
const profiles = require('./routes/profileRoutes.js')


server.use(express.json());

server.use('/somethingRandom', profiles);


module.exports = server