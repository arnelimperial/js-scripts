"use strict";
/*Sample script*/
var arr = ['Hello', 'Javascript', '2020!'];
var array1 = [];
for (var i = 0; i < arr.length; ++i) {
    array1.push(arr[i]);
}
// pass a function to map
var map1 = array1.map(function (x) { return x; });
console.log(map1.join(' '));
// expected output: Hello Javascript 2020!
