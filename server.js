require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/'));

//Route setup
app.get('/', (req, res) => {
  res.sendfile('homepage.html')
})

app.get('/start', (req, res) => {
  res.redirect(process.env.START_URL)
})

//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });
