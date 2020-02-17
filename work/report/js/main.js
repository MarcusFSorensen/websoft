/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    console.log("All ready.");
    
})();

const tablebody = document.getElementById('schools');

var fetchSchools = function(){
    fetch('Data/Kristianstad.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        showSchools(data.Skolenheter);
    });
}

var showSchools = function(data){
    //var table = document.getElementById('schools');
    tablebody.innerHTML = "";
    data.forEach(object =>{
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.Skolenhetskod + '</td>' +
        '<td>' + object.Skolenhetsnamn + '</td>' +
        '<td>' + object.Kommunkod + '</td>' +
        '<td>' + object.PeOrgNr + '</td>';
        table.appendChild(tr);
    })
}



