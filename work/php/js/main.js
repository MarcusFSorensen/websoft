/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    console.log("All ready.");
    
})();

var coll = document.getElementsByClassName("collapsible");
var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        console.log("working");
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const tablebody = document.getElementById('teabody');

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
        tablebody.appendChild(tr);
    })
}



