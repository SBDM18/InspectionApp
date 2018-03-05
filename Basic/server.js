var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./models');
var routes = require('./controllers/inspect_controller.js')

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});

//calls routes from controller folder
app.use(routes);



db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on port: ' + PORT);
    });
});





// Access Key ID:
// AKIAJITXHS7Q7GWXZP3A
// Secret Access Key:
// 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

//mysql server host inspectapp-dev.ckeyfha6pbhh.us-east-1.rds.amazonaws.com
//mysql pass insight619 username inspectapp
