/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create and empty object with var animal
var animal = {}
// using a dot notation add a key value
animal.species = 'Elephant';
// using bracket notation add key value
animal['name'] = 'Dumbo';
// using dot notation add noises
animal.noises = [];
// print animal object
console.log(animal);
// 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an empty array with var noises
var noises = [];
// use bracket notation to give noises its first element
noises[0] = 'grunt';
// add another noise by using an array fuction
noises.push('trumpet');
// add another element to the beggining 
noises.unshift('snort'); 
// add another element using bracket notation
noises[noises.length] = 'cry';
// log the length of noises
console.log(noises.length);
// log the the last element of the array
console.log(noises[noises.length - 1]);
// console log noises
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// assigning the noises prop to our noises array
animal['noises'] = noises;
// use .push to add another noise to the nosie property
animal.noises.push('chewing');
// console log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a var name animals and assign to empty array
var animals = [];
// push animal to animals
animals.push(animal);
// create a var called duck with an object
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}; 
// push duck to animals
animals.push(duck); 
// console log animals
console.log(animals);
// create two more more animals and push them to animals 
var dog = {
  species: 'canine',
  name: 'Blazer',
  noises: ['Howl', 'Bark', 'Growl', 'Whimper']
};
animals.push(dog); 
var bird = {
  species: 'avian',
  name: 'Rio',
  noises: ['Squawk', 'Chirp', 'Hello World']
};
animals.push(bird);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating an empty 
var friends = []; // //An empty array is useful because it can hold different data types as a list
// create a function with getRandom thattakes parameter of index
function getRandom(index){
return Math.floor(Math.random() * animals.length)
}
// push random animal + animal name to friends
friends.push(animals[getRandom()].name); 
// logging friends
console.log(friends);
// adding friends to dog & bird
dog['friends'] = friends;
bird['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}