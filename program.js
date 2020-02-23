const boxes = document.querySelectorAll('.box');

const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'coral');

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'coral');

//for of

for(const cur of boxes){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I change to blue';

}

const ages = [12, 11, 40, 2, 17];

const item18andAbove = ages.findIndex(cur => cur >=18);

//console.log(ages[item18andAbove]);
console.log(item18andAbove);

const item18andAbovefind = ages.find(cur => cur >=18);
console.log(item18andAbovefind);
