var a = 'Taulukossa tekstiä. Yhdistetään sanat:';

var b = "Taulukossa vain lukuja. Lasketaan summa:";

var checkFunc = function(x){
	var num = x.every(function(element) {return typeof element === 'number';});
	if(x.indexOf('taulukon') === 1 && (num === false)){
		
		console.log(a);
		
	}else if(x.indexOf(3) === 0 && (num === true)){
		
		console.log(b);
	
	}else if(x.indexOf('alkiot') === 2 && (num === false)){
		
		console.log(a);
		

	}else{
		console.log(a);
	}
	
}


var combineFunc = function(x){
	var num = x.every(function(element) {return typeof element === 'number';});
	if(num === false){
		
	
		return(x.join(" ") + " ");
	}else{
		
		var sum = x.reduce(function(a, b){return a + b;}, 0);
		return (sum); 
		
	}
		
	
}


var sumFunc = function(x){
	var num = x.every(function(element) {return typeof element === 'number';});
	if(num === true){
		
		var sum = x.reduce(function(a, b){return a + b;}, 0);
		console.log(sum); 
	}
	
}
    

var array1 = ['Tämän', 'taulukon', 'alkiot', 'muodostavat', 'lauseen'];
var array2 = [3, 5, 7, 8, 8, 11, 13, 15, 16, 17, 19, 20];
var array3 = [5, 'kertaa', 3, 'on', 15];

function someFunction(arr, f1, f2, f3){
    if(!f1(arr)){
        console.log(f2(arr));
    }else{
        console.log(f3(arr));
    }
}

someFunction(array1, checkFunc, combineFunc, sumFunc);
someFunction(array2, checkFunc, combineFunc, sumFunc);
someFunction(array3, checkFunc, combineFunc, sumFunc);
