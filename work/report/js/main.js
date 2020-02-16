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
        console.log(myJson);
        kristianstadSchools = myJson;
        $.each(kristianstadSchools, function(skolenhetskod, skolenhetsnam, kommunkod, perorgnr){
            $("<tr><td>" + skolenhetskod + "</td><td>" + skolenhetsnam + "</td><td>" + kommunkod + "</td><td>" + perorgnr + "</td></tr>").appendTo("#schools")
        })
    });
}
