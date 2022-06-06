const connectToMongo=require('./db');
// npm install -g nodemon ---> for running applications we need to install this
//running script-->   nodemon .\index.js     
connectToMongo();// connecting to mongodb
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})
app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes',require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})