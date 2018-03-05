const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

let app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static('public'));



app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});

// app.use(routes);



app.listen(PORT, function(){
    console.log("App is listening on PORT" + PORT);
});