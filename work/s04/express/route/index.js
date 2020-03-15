/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();


router.get("/lotto-json", (req, res) => {

    //creating a list adding 7 random numbers between 1 and 35 without duplicates
    var lottolist = [];
    for(var i = 0; i<7; i++){
        var number = Math.floor(Math.random()*35)+1
        if(lottolist.includes(number)){
            i--;
            continue
        }
        lottolist.push(number);
        console.log(number);
    }

    //getting the numbers from the query string and inserting them in a map so I can iterate over them
    var string = req.query.row;

    string.replace("[","");
    var numbers = string.split(",").map(Number);
    
    //iterating the numbers from the query string to see if any numbers is matching
    var correct = 0;
    numbers.forEach((number)=> {
        if(lottolist.includes(number)){
            correct++;
        }
    });
    
    let data = {};
    data = JSON.stringify({row: numbers, correct: correct});
    res.send(data);
})

module.exports = router;
