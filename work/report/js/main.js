/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    console.log("All ready.");
}());

var kristianstadSchools;

var showSchools = function(){
    fetch('Data/Kristianstad.json')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        myJson.array.forEach(element => {
            console.log(element);
        });
        console.log(myJson);
        kristianstadSchools = myJson;
        var table = document.getElementById("schools");

    });
}

