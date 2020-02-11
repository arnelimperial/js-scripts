"use strict";
var kauppa = {};
kauppa.asiakasrekisteri = (function () {
    var list = [];
    function func1(indices) {
        if (list[indices] === undefined) {
            console.log('Liian korkea ID!');
        }
        else {
            console.log(indices + ': ' + list[indices]);
        }
    }
    function func2(fname, lname) {
        var full_name = lname + ' ' + fname;
        var l = list.push(full_name);
        console.log('Lisätty asiakas ID:llä ' + (l - 1));
    }
    function func3() {
        var listahan = 'Tulostetaan kaikki asiakkaat:';
        console.log(listahan);
        for (var i = 0; i < list.length; ++i) {
            console.log(i + ': ' + list[i]);
        }
    }
    return {
        asiakkaanTiedot: func1,
        lisaa: func2,
        asiakasLista: func3
    };
})();
kauppa.asiakasrekisteri.asiakkaanTiedot(0);
kauppa.asiakasrekisteri.lisaa('Matti', 'Mikalainen');
kauppa.asiakasrekisteri.lisaa('Hannah', 'Huipukoodari');
kauppa.asiakasrekisteri.asiakkaanTiedot(1);
kauppa.asiakasrekisteri.lisaa('XXXXX', 'YYYYYYY');
kauppa.asiakasrekisteri.lisaa('Simo', 'Hillo');
kauppa.asiakasrekisteri.asiakasLista();
