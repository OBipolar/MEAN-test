'use strict';

var express = require('express');
var controller = require('./entry.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.post('/', auth.hasRole('admin'), controller.create);
router.delete('/:entry_id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
