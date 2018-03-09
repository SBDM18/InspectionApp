var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/templates', function (req, res) {
    res.render('template');
});

module.exports = router;