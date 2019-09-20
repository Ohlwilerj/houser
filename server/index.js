require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const{SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')



// TOP LEVEL MIDDLEWARE
app.use(express.json())




// ENDPOINTS
app.post('/api/house', ctrl.addHouse)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    app.listen(SERVER_PORT, () => console.log(`Sim 2 will be done in ${SERVER_PORT} hours`))
})