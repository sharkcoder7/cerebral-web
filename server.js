require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
var curry = require('curry');

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/'));

var render_with_env = curry( function (name, req, res) {

  // TODO: make this hash programatically
  var envs = {APP_BASE_URL: process.env.APP_BASE_URL}

  if (!name) {
    name = req.path.replace(/^\/+/g, '');
  }

  res.render(name, envs, function(err, html) {
    if(err) {
        envs['ERROR_MESSAGE'] = err
        res.render('error', envs);
        // res.redirect('/404'); // File doesn't exist
    } else {
        res.send(html);
    }
  });
  
})

app.get('/', render_with_env('home'))
app.get('/*', render_with_env(null))

//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });