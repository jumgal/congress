const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.use('/', routes());

app.listen(port, function(){
  console.log('Web server started on port ' + port);
});