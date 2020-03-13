(function () {
    "use strict";

    console.log("All ready.");

    const tablebody = document.getElementById('teabody');

    var showLotto = function(){
        tablebody.innerHTML = "";
        var lottolist = [];
        for(var i = 0; i<7; i++){
            var number = Math.floor(Math.random()*35)+1
        if(lottolist.includes(number)){
            i;
            continue
        }
        lottolist.push(number);
        console.log(number);
        }
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + lottolist[0] + '</td>' +
            '<td>' + lottolist[1] + '</td>' +
            '<td>' + lottolist[2] + '</td>' +
            '<td>' + lottolist[3] + '</td>' +
            '<td>' + lottolist[4] + '</td>' +
            '<td>' + lottolist[5] + '</td>' +
            '<td>' + lottolist[6] + '</td>';
            tablebody.appendChild(tr);
    }

    window.onload = function(){
        showLotto();
    }
    
})();
