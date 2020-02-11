/*Sample script*/ 

const arr = ['Hello', 'Javascript', '2020!'];
const array1 = [];
for(let i=0; i< arr.length; ++i){
  array1.push(arr[i]);
}

// pass a function to map
const map1 = array1.map(x => x);

console.log(map1.join(' '));
// expected output: Hello Javascript 2020!
