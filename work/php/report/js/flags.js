(function () {
    "use strict";

    console.log("All ready.");
    var swedishBase = document.getElementById("sweFlag");

    
})();



var showSweden = function(){
    var sweFlag = document.getElementById("sweFlag");
    if(sweFlag.style.visibility === "hidden" || sweFlag.style.visibility === ""){
        sweFlag.style.visibility = "visible";
    } else {
        sweFlag.style.visibility = "hidden";
    }
}

var showDenmark = function(){
    var dkFlag = document.getElementById("dkFlag");
    if(dkFlag.style.visibility === "hidden" || dkFlag.style.visibility === ""){
        dkFlag.style.visibility = "visible";
    } else {
        dkFlag.style.visibility = "hidden";
    }
}

var showPoland = function(){
    var plFlag = document.getElementById("plFlag");
    if(plFlag.style.visibility === "hidden" || plFlag.style.visibility === ""){
        plFlag.style.visibility = "visible";
    } else {
        plFlag.style.visibility = "hidden";
    }
}
