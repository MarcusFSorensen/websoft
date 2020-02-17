/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    var kristianstadSchools = [{"Skolenhetskod": "10983605",
"Skolenhetsnamn": "SFI 1",
"Kommunkod": "1290",
"PeOrgNr": "2120000951"}, {"Skolenhetskod": "12725451",
"Skolenhetsnamn": "Fjälkinge skola L",
"Kommunkod": "1290",
"PeOrgNr": "2120000951"}];
    console.log("All ready.");
}());

var kristianstadSchools = [{"Skolenhetskod": "10983605",
"Skolenhetsnamn": "SFI 1",
"Kommunkod": "1290",
"PeOrgNr": "2120000951"}, {"Skolenhetskod": "12725451",
"Skolenhetsnamn": "Fjälkinge skola L",
"Kommunkod": "1290",
"PeOrgNr": "2120000951"}];

var fetchSchools = function(){
    fetch('Data/Kristianstad.json')
    .then((response) => {
        showSchools(kristianstadSchools);
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
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

