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
	
	
