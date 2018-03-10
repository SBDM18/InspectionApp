const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/units', function (req, res) {
    res.render("units");
});




module.exports = router;