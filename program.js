function coder(name, job, salary){
  this.nimi = name;
  this.tyo = job;
  this.palkka = salary;
  this.vertaaPalkka = function(other){
    var diff = Math.abs(this.palkka - other.palkka);
    if(this.palkka > other.palkka){
      console.log(this.nimi + ' tienaa ' + diff + ' enemmän kuin ' + this.other);
    }else if(this.palkka < other.palkka){
      console.log(this.nimi + ' tienaa ' + diff + ' vähemmän kuin ' + other.nimi);
    }else{
      console.log(this.nimi + ' tienaa yhtä paljon kuin ' + other.nimi);
    }
  }
}
const henk1 = new coder('Mikko', 'JS-Koodari', 5000);
const henk2 = new coder('Lea','Python-koodari', 1500);
const henk3 = new coder('Pena','Opettaja', 1000);


console.log('Ensimmäisen henkilön nimi: ' + henk1.nimi);
console.log('Toisen henkilön työ: ' + henk2.tyo);
console.log('Kolmannen henkilön palkka ' + henk3.palkka);


henk1.vertaaPalkka(henk2);
henk3.vertaaPalkka(henk2);
henk3.vertaaPalkka(henk3);







