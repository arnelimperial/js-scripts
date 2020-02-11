const viikonPaiva = (function(){

  const nimet = ['Suununtai', 'Maanantai', 'Tiistai', 'Keskiviiko', 'Torstai', 'Perjantai', 'Lauantai'];
 
  function list_length(){
		let ll = nimet.length;
		return ll;
	}
	
	function nameIndex(indices:number){
		let res_indices = nimet[indices];
		return res_indices;
	}
	
	function numIndex(element:string){
		let res_element = nimet.indexOf(element);
		return res_element;
		
  }
  
  //return and rename function
	return{
		lkm: list_length,
		nimi: nameIndex,
		numero: numIndex,
  }
  
})();

var num = 0;
console.log('Viikossa on ' + viikonPaiva.lkm() + ' päivää.');
console.log('Ohjelmoinnissa päivän ' + viikonPaiva.nimi(num) + ' indeksi on yleensä ' + viikonPaiva.numero(viikonPaiva.nimi(num)));