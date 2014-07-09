// server.js

    // modules
    var express = require('express');
    var app = express();

    var http = require('http');
    var path = require('path');
    var mongoose = require('mongoose');
    var passport = require('passport');
    var fs = require('fs');
    var flash = require('connect-flash');


    // configuration

    // config files
    var db = require('./config/db');

    var port = process.env.PORT || 8080;
    mongoose.connect(db.url);

    app.configure(function() {

        // express config
        app.use(express.static(__dirname + '/public'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.session({secret: 'SECRET'}));

    });

    // $routes
    require('./app/routes')(app, passport);

    // start app
    app.listen(port);
    console.log('Magic happens on port ' + port);
    exports = module.exports = app;
