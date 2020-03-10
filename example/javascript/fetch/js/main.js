/**
 * @preserve Made by mos@dbwebb.se
 */
(function () {
    'use strict';

    let url;

    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url = "data/1081.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

<<<<<<< HEAD
    //fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081', {mode: 'no-cors'})
    fetch('data/1081.json')
=======
    url = "https://rem.dbwebb.se/api/users";
    fetch(url)
>>>>>>> d9f04c7d1d08d5c910e4cc730952ff5e2993bcff
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    console.log('Sandbox is ready!');
})();
