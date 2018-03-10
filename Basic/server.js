const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const routeUser = require('./controllers/user_controller');
const routeAdmin = require('./controllers/admin_controller');
const routeHome = require('./controllers/home_controller');
const routeInspect = require('./controllers/inspect_controller');
const routeUnit = require('./controllers/unit_controller');
const routeReport = require('./controllers/report_controller');
const routeTemplate = require('./controllers/template_controller');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json({ extended: true }));


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));





// + process.env.MONGO_ATLAS_PW1 +
mongoose.connect('mongodb://dward:sFjbTsUmvzP9O8sP@insightinspect-dev-shard-00-00-hfhtu.mongodb.net:27017,insightinspect-dev-shard-00-01-hfhtu.mongodb.net:27017,insightinspect-dev-shard-00-02-hfhtu.mongodb.net:27017/test?ssl=true&replicaSet=InsightInspect-dev-shard-0&authSource=admin');
var db = mongoose.connection;
    
//calls routes from controller folder
app.use(routeUser);
app.use(routeAdmin);
app.use(routeHome);
app.use(routeInspect);
app.use(routeUnit);
app.use(routeReport);
app.use(routeTemplate);    

app.listen(PORT, function () {
    console.log('App listening on port: ' + PORT);
});


//probably discuss the arragnement of folders for routes ( do we want to split up our controller pages into specific routes that will be created) also discuss how we want to layout the mongoose models page

//dbatlas uri mongodb+srv://<username>:<Password>@insightinspect-dev-hfhtu.mongodb.net/test
//username mgroe GigqoEECIgF9bURC MONGO_ATLAS_PW2
//username dward sFjbTsUmvzP9O8sP MONGO_ATLAS_PW1
// Access Key ID:
// AKIAJITXHS7Q7GWXZP3A
// Secret Access Key:
// 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

