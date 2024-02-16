const server = require('./server');
const cors = require('cors');


server.use(cors);



server.listen(3000, () => {
    console.log('THE SERVER IS RUNNING')
})
