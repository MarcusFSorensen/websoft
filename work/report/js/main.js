/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    console.log("All ready.");
}());

var kristianstadSchools;

var fetchSchools = function(){
    fetch('Data/Kristianstad.json')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        kristianstadSchools = myJson;
        showSchools(kristianstadSchools);
        console.log(kristianstadSchools);
    });
}

var showSchools = function(data){
    var table = document.getElementById('schools');
    data.forEach(function(object){
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.Skolenhetskod + '</td>' +
        '<td>' + object.Skolenhetsnamn + '</td>' +
        '<td>' + object.Kommunkod + '</td>' +
        '<td>' + object.PeOrgNr + '</td>';
        table.appendChild(tr);
    })
}

