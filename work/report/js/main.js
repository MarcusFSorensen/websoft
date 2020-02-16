/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun', {mode: 'cors'})
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });



    console.log("All ready.");
}());
