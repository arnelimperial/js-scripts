"use strict";
var lause = 'J07ku7 k1rj01774v47 54n0j4 num3r0174 kay77a3n.';
function tulostaNumerot() {
    var pattern = /[0-9]/g;
    var result = lause.match(pattern);
    if (!result) {
        console.log("Ei Numeroita!");
    }
    else {
        console.log(result);
    }
}
tulostaNumerot();
