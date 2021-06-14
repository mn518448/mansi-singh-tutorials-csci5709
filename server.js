const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/csci5709-tutorial4'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '/dist/csci5709-tutorial4/index.html'));
});
app.listen(process.env.PORT || 8080);