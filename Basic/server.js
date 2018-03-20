const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');



//Auth packages
const session = require('express-session');
const passport = require('passport');

const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;
const app = express();

const routeUser = require('./controllers/user_controller');
const routeAdmin = require('./controllers/admin_controller');
const routeHome = require('./controllers/home_controller');
const routeInspect = require('./controllers/inspect_controller');
const routeUnit = require('./controllers/unit_controller');
const routeReport = require('./controllers/report_controller');
const routeTemplate = require('./controllers/template_controller');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'tubular dude',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


//calls routes from controller folder
app.use(routeUser);
app.use(routeAdmin);
app.use(routeInspect);
app.use(routeHome);
app.use(routeUnit);
app.use(routeReport);
app.use(routeTemplate); 


// + process.env.MONGO_ATLAS_PW1 +
// mongoose.connect('mongodb://dward:sFjbTsUmvzP9O8sP@insightinspect-dev-shard-00-00-hfhtu.mongodb.net:27017,insightinspect-dev-shard-00-01-hfhtu.mongodb.net:27017,insightinspect-dev-shard-00-02-hfhtu.mongodb.net:27017/test?ssl=true&replicaSet=InsightInspect-dev-shard-0&authSource=admin');

mongoose.connect("mongodb://localhost:27017/test");
var db = mongoose.connection;
    
 

app.listen(PORT, function () {
    console.log('App listening on port: ' + PORT);
});


//dbatlas uri mongodb+srv://<username>:<Password>@insightinspect-dev-hfhtu.mongodb.net/test
//username mgroe GigqoEECIgF9bURC MONGO_ATLAS_PW2
//username dward sFjbTsUmvzP9O8sP MONGO_ATLAS_PW1
// Access Key ID:
// AKIAJITXHS7Q7GWXZP3A
// Secret Access Key:
// 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

