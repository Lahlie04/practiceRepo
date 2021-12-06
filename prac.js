  let name = 'Kgomotso';
console.log(`My name is ${name}`);
const fruits = ['apple','orange', 'pears'];

console.log(fruits[1]);
// adding a value inside an array at the end

 fruits.push('mangos');

 console.log(fruits);

 // adding a value inside an array at the beginning 
 fruits.unshift('strawberries');

 console.log(fruits);

 //Removing a values at the end of the array

 fruits.pop();

 console.log(fruits);

//To see if something is an array

console.log(Array.isArray(fruits));

//To get the index of a value

console.log(fruits.indexOf('orange'));

//OBJECT LITERALS

const person = 
{
 fistname: 'Thapelo',
 lastname: 'Monakedi',
 age: 23,
 hobbies: ['music', 'movies', 'gym'],

 //Embedded Object- An object within an object

address: 
{
  street: '60 main st',
  city: 'Boston',
  state: 'NA'
}
}
console.log(person);

//To access one single value or more you can use a comma to seperate them
console.log(person.fistname, person.lastname);