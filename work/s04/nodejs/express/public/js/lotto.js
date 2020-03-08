(function () {
    "use strict";

    console.log("All ready.");

    const tablebody = document.getElementById('teabody');

    var showLotto = function(){
        tablebody.innerHTML = "";
        var first = Math.floor(Math.random() * 35)+1;
        var second = Math.floor(Math.random() * 35)+1;
        var third = Math.floor(Math.random() * 35)+1;
        var forth = Math.floor(Math.random() * 35)+1;
        var fifth = Math.floor(Math.random() * 35)+1;
        var sixth = Math.floor(Math.random() * 35)+1;
        var seventh = Math.floor(Math.random() * 35)+1;
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + first + '</td>' +
            '<td>' + second + '</td>' +
            '<td>' + third + '</td>' +
            '<td>' + forth + '</td>' +
            '<td>' + fifth + '</td>' +
            '<td>' + sixth + '</td>' +
            '<td>' + seventh + '</td>';
            tablebody.appendChild(tr);
        /*data.forEach(object =>{
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + first + '</td>' +
            '<td>' + second + '</td>' +
            '<td>' + third + '</td>' +
            '<td>' + forth + '</td>' +
            '<td>' + fifth + '</td>' +
            '<td>' + fifth + '</td>' +
            '<td>' + sixth + '</td>' +
            '<td>' + seventh + '</td>';
            tablebody.appendChild(tr);
        })*/
    }

    window.onload = function(){
        showLotto();
    }
    
})();
