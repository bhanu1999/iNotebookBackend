const connectToMongo=require('./db');
// npm install -g nodemon ---> for running applications we need to install this
//running script-->   nodemon .\index.js     
connectToMongo();// connecting to mongodb
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})