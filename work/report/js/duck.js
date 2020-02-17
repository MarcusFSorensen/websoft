(function () {
    'use strict';

    var area = document.body,
        areaHeight = window.innerHeight,
        areaWidth = window.innerWidth,
        duck = document.createElement('img');
        
    duck.src='img/duck.png';
    duck.style.position ='absolute';
    duck.style.left = '0px';
    duck.style.top = '0px';
    duck.style.height = '50px';
    duck.style.width = '50px';
    duck.style.zIndex = 10000;
    duck.addEventListener('click', respawnDuck);

    function respawnDuck(){
        var newX = Math.floor(Math.random() * (areaWidth-duck.width)),
        newY = Math.floor(Math.random() * (areaHeight-duck.height));
    
        duck.style.left = newX+'px';
        duck.style.top = newY+'px';
        area.appendChild(duck);
    }
    respawnDuck();
})();
