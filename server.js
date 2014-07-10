// server.js

    // set up
    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');

    // configuration

    mongoose.connect('mongodb://localhost/test');

    app.configure(function() {
        app.use(express.static(__dirname + '/public'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
    });

    // routes
    require('./models/routes.js')(app);

    // start up
    app.listen(8080);
    console.log("Magic happending on port 8080");
