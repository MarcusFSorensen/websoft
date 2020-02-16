/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081', {mode: 'no-cors'})
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });



    console.log("All ready.");
}());
