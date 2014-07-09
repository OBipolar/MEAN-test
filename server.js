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
    mongoose.connect('mongodb://localhost/temp', function(err) {

        // save to mongodb
        silence.save(function (err, silence) {
            if (err) return console.error(err);
            silence.speak();
        });
        fluffy.save(function (err, fluffy) {
            if (err) return console.error(err);
            fluffy.speak();
        });

        // find from mongodb
        Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
        });

    });

    var port = process.env.PORT || 8080;

    // mongoose config
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        // callback function
    });

        // new Schema init
        var kittySchema = mongoose.Schema({
            name: String
        });
        //
        kittySchema.methods.speak = function() {
            var greeting = this.name
                ? 'Meow name is ' + this.name
                : 'I dont have a name';
            console.log(greeting);
        };
        // new model init
        var Kitten = mongoose.model('Kitten', kittySchema);
        // new instance of the model
        var silence = new Kitten({ name: 'Silence'});
        var fluffy = new Kitten({ name: 'fluffy'});

    app.configure(function() {
        // express config
        app.use(express.static(__dirname + '/public'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());

    });

    // $routes
    require('./app/routes')(app);

    // start app
    app.listen(port);
    console.log('Magic happens on port ' + port);
    exports = module.exports = app;
