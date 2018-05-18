require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controllers/controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
  console.log('Successfully connected to DB')
  app.set('db', db)
})

app.post('/api/auth/register', controller.create_user)
app.post('/api/auth/login', controller.login_user)




app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`))