(function () {
    "use strict";

    var danishFlagTarget = document.getElementById('danishFlag');
    var swedishFlagTarget = document.getElementById('swedishFlag');
    var norwayFlagTarget = document.getElementById('norwayFlag');
    var danishFlagLink = document.getElementById('draw-denmark');
    var swedishFlagLink = document.getElementById('draw-sweden');
    var norwayFlagLink = document.getElementById('draw-norway');


    //denmark
    function drawFlagDenmark()  {
        var flagDenmark = '<div class="danishFlag denmark"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        danishFlagTarget.innerHTML = flagDenmark;
    }


    danishFlagLink.addEventListener("click", function () {
        console.log("Event for clicking link denmark.");
        drawFlagDenmark();
    });

    //sweden
    function drawFlagSweden()  {
        var flagSweden = '<div class="swedishFlag sweden"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        swedishFlagTarget.innerHTML = flagSweden;
    }


    swedishFlagLink.addEventListener("click", function () {
        console.log("Event for clicking link sweden.");
        drawFlagSweden();
    });

    //norway
    function drawFlagNorway()  {
        var flagNorway = '<div class="swedishFlag norway"><div class="part1"></div>' +
        '<div class="part2"></div>'+'<div class="part3"></div>'+'<div class="part4"></div></div>';

        console.log("Drawing flag");
        norwayFlagTarget.innerHTML = flagNorway;
    }


    norwayFlagLink.addEventListener("click", function () {
        console.log("Event for clicking link sweden.");
        drawFlagNorway();
    });

})();
