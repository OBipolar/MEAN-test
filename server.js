// server.js

    // modules
    var express = require('express');
    var app = express();

    var http = require('http');
    var path = require('path');
    var mongoose = require('mongoose');
    var fs = require('fs');

    // configuration

    // config files
    mongoose.connect('mongodb://localhost/test');

    var port = process.env.PORT || 8080;

    // mongoose config
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        // callback function
    });

    app.configure(function() {
        // express config
        app.use(express.static(__dirname + '/public'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());

    });

    // $routes
    require('./app/routes')(app, passport);

    // start app
    app.listen(port);
    console.log('Magic happens on port ' + port);
    exports = module.exports = app;
