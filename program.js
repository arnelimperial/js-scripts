function addFourAges(a, b, c, d){
    return a+b+c+d;
}

let ages = [12, 67, 80, 20];
const sum6 = addFourAges(...ages);
console.log(sum6);

let familyA = ['Bob', 'Jane', 'Paul'];

let familyB = ['Anna', 'Dean', 'Lucia'];

const fam = [...familyA, ...familyB];
console.log(fam);

const h = document.querySelector('h1');

//Return a nodelist which can use spread operator
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = '#c0c0C0');