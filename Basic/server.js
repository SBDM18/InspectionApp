const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const exphbs = require('express-handlebars');
const routes = require('./controllers/inspect_controller.js');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



const mongoose = require('mongoose');

// + process.env.MONGO_ATLAS_PW1 +
mongoose.connect('mongodbsrv://dward:A0rr9Ib465VZwuo0@insightinspect-dev-hfhtu.mongodb.net/test');
var db = mongoose.connection;

//calls routes from controller folder
app.use(routes);

app.listen(PORT, function () {
    console.log('App listening on port: ' + PORT);
});


//probably discuss the arragnement of folders for routes ( do we want to split up our controller pages into specific routes that will be created) also discuss how we want to layout the mongoose models page

//dbatlas uri mongodb+srv://<username>:<Password>@insightinspect-dev-hfhtu.mongodb.net/test
//username mgroe GigqoEECIgF9bURC MONGO_ATLAS_PW2
//username dward A0rr9Ib465VZwuo0 MONGO_ATLAS_PW1
// Access Key ID:
// AKIAJITXHS7Q7GWXZP3A
// Secret Access Key:
// 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

