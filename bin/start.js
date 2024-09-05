const app = require('../app')
const http = require('http')
const config = require('../config/config')

const { PORT } = config.config

const server = http.createServer(app)

server.listen(PORT, (err) => {
    if (err) {
       throw err 
    }
    console.log('listening on port: ' + PORT);
    
})