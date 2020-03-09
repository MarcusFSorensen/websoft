/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();


router.get("/lotto-json", (req, res) => {
    var lottolist = [];
    for(var i = 0; i<6; i++){
        lottolist.push(Math.floor(Math.random()*35)+1);
    }
    var numbers = req.query.row;
    numbers.forEach((number) => {lottolist.})
    res.send(numbers);
})

module.exports = router;
