var arr = [];
for (var x = 2; x <= 60; x++) {

    var isPrime = true;
    for (var i = 2; i <= x; i++) {
        if (x % i === 0 && i !== x || x === 0 || x ===1) {
            isPrime = false;
        }
      
    }
    if (isPrime === true) {
      arr.push(x);
      console.log(x);
    }
}
console.log('Alkulukuja löydetty yhteensä: ' + arr.length);