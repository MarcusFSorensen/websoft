/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    var showSchools = function(){
        fetch('Data/Kristianstad.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
    }

    console.log("All ready.");
}());
