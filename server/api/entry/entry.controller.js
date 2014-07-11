/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var Entry = require('./entry.model');

// Get list of entries
exports.index = function(req, res) {
  Entry.find(function(err, entries) {
    if (err) res.send(err);
    res.json(entries);
  });
};

// Creates a new entry in the DB.
exports.create = function(req, res) {
  Entry.create({
    text: req.body.text,
    }, function(err, entry) {
        if (err)
          res.send(err);
        Entry.find(function(err, entries) {
          if (err) res.send(err);
            res.json(entries);
            });
    });
};

// Deletes a entry from the DB.
exports.destroy = function(req, res) {
  Entry.remove({
                _id : req.params.entry_id
            }, function(err, entry) {
                if (err)
                    res.send(err);

                Entry.find(function(err, entries) {
                    if (err) res.send(err);
                    res.json(entries);
                });
            });
};


