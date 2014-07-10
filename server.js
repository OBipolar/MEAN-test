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
    });

    // define model
    var Todo = mongoose.model('Todo', {
        text: String
    });

    // routes
        // api
        // get all todos
        app.get('/api/todos', function(req, res) {
            Todo.find(function(err, todos) {

                if (err)
                    res.send(err)

                res.json(todos);
            });
        });

        // create todo and send back all todos
        app.post('/api/todos', function(req, res) {
            Todo.create({
                text: req.body.test,
                done: false
            }, function(err, todo) {
                if (err)
                    res.send(err);

                Todo.find(function(err, todos) {
                    if (err)
                        res.send(err)
                    res.json(todos);
                });
            });
        });

        // delete a todo
        app.delete('/api/todos/:todo_id', function(req, res) {
            Todo.remove({
                _id : req.params.todo_id
            }, function(err, todo) {
                if (err)
                    res.send(err);

                Todo.find(function(err, todos) {
                    if (err)
                        res.send(err)
                    res.json(todos);
                });
            });
        });

    // application
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

    // start up
    app.listen(8080);
    console.log("Magic happending on port 8080");
