const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/angular-web5709Tutorial3'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '/dist/angular-web5709Tutorial3/index.html'));
});
app.listen(process.env.PORT || 8080);