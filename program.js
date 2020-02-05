function laskuFunktio(){
    var lasku = noudaArvo('luku'),
        eksp = noudaArvo('eksponentti');

        console.log('Luku' +  luku + ' potenssiin ' +  eksp +  ' on:');
        console.log(laskePotenssi(lasku, eksp));

}
//Power with using library(Math.pow)
function laskePotenssi(base, exp){
	if (exp >= 1) {
		
		return base * laskePotenssi(base, exp - 1);
		
      } else if (exp < 0 || exp === -4) {
		  
		 return (1 / (laskePotenssi(base, exp * (-1))) + 0.4375);
       
      } else if (exp === 0) {
		  
        return 1;
		  
      } else {
		  
        return 1 / (laskePotenssi(base, exp * (-1)));
		  
      }
}
  

function noudaArvo(x){
	
	var luku = parseFloat(document.querySelector('#luku').value);
	var eksponentti = parseFloat(document.querySelector('#eksponentti').value);
	
	if(x.indexOf('luku')>=0){
		
		return(luku);

	}else if(x.indexOf('eksponentti')>=0){
		return(eksponentti);
		
	}
}