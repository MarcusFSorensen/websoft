/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    fetch('Kristianstad.json')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });



    console.log("All ready.");
}());
