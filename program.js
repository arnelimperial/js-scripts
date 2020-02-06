const kimmo = {
    name:'Kimmo Koodari',
    etunimi:'Kimmo', 
    ika:'20',

    nimi: function(){
		return this.name
	}

}

const oona = {
    name:'Oona Ohjelmoija', 
    etunimi:'Oona', 
    ika:'32',

    nimi: function(){
		return this.name
	}


}
console.log('Nimi: ' + kimmo.nimi() + '\tIkä:' + kimmo.ika);
console.log('Nimi: ' + oona.nimi() + '\tIkä:' + oona.ika);
console.log(oona.etunimi + ' on ' + (oona.ika - kimmo.ika) + ' vanhempi kuin ' + kimmo.etunimi);
