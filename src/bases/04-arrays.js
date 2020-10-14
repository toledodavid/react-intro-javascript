//console.log('Hello!');


/* const arr = new Array(3);
console.log(arr); */

const arr = [1,2,3];

/*
This mutates the original array.
  arr.push(1);
  arr.push(2);
  arr.push(3);
*/

let arr2 = [...arr, 4];

const arr3 = arr2.map(number => {
  return number * 2;
});

console.log(arr);
console.log(arr2);
console.log(arr3);