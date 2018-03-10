const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/admin', function (req, res) {
    res.render("admin");
});

module.exports = router;