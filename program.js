const question = new Map();
question.set('question', 'What is the official name of the latest JS version?');
//Multiple choice key value pair
question.set(1, 'ES6');
question.set(2, 'ES2015');
question.set(3, 'ES5');
question.set(4, 'ES7');
question.set('correct', 2);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer');

//console.log(question);

//Retrieve
console.log(question.get('question'));
console.log(question.get(4));
console.log(question.get('correct'));
console.log(question.get(true));
console.log(question.size);

//console.log(question.delete(3));
//if(question.has(3)){
    //question.delete(3);
//}
//console.log(question);

//Clear all keys value and data

//question.clear();
console.log(question);

//Looping throug a map using forEach method

question.forEach((value, key) => console.log(`This is ${key} key and set to a value: ${value}`));

//Using entries method in for of with destructuring
for(let [key, value] of question.entries()){
  if(typeof(key) === 'number'){
    console.log(`Number key item in the map are ----> ${value}: ${key}`);
  }
}


const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));


/*Maps is better than object when making hash maps bec it is 
 - iterable
 - we can use anything as keys
 - Easy to get the size of the map
*/