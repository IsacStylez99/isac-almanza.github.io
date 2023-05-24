////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start, end, int) {
  //creat array
  var arr = [];
  //check if start equals end
  if (start === end){
  //if so return empty array
  return arr;
  } //check if undefined
  if (int !== undefined){
    //if int is negative
    if (int < 0){
      //return arr
      return arr
    }
    //loop to increase int 
    for (let i = start; i <= end; i += int){
      //push i into arr
      arr.push(i);
    }
  } else {
    //loop from start to end 
    for (let i = start; i <= end; i++){
      arr.push(i)
    }
  }
  return arr;
  }
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function sum(arr) {
  //set total to 0
  var total = 0;
  //loop through array
  for (let i = 0; i < arr.length; i ++ ){
    //increment 
    total += arr[i];
  }
  return total
  }
////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function reverseArray(arr) {
  //create new array
    var rev = [];
    //loop in reverse
  for (let i = arr.length - 1; i >= 0; i --){
    //push values to new array
    rev.push(arr[i]);
  }
  return rev;
  }
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
let rest = null;
//iterate in reverse
for (let i = array.length - 1; i >= 0; i--){
  //on each iteration set rest to the current value of rest 
  rest = {value: array[i], rest: rest };
}
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function listToArray(list, output=[]){
  //base
if (list.rest === null){
  output.push(list.value);
  return output;
}
  //recursion
    //access outermost layer's value prop and push into output
  output.push(list.value);
  
  return listToArray(list.rest, output)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, obj) {
  // create variable to hold array/obj
  var arr = listToArray(obj);
  //unshift value to front of arr
  arr.unshift(value);
  //return
  return arrayToList(arr);
  }
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(obj, value) {
  //create variable to hold array/obj
  var arr = listToArray(obj);
  //checking if index has value
  if (arr[value] !== undefined){
    return arr[value];
    //check if value is negative
  } else if (value < 0){
    return undefined;
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function deepEqual(x, y) {
  // determine if x & y are not objects
  if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }
    if (typeof x !== 'object' || typeof y !== 'object'){
      return false
    }
  // we know we are dealing with complex datatypes
  // create array of keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //check if xKeys values are not equal to yKeys
  if (xKeys.length !== yKeys.length){
    return false;
  }
  // iterate through x keys array;
  for (let i = 0; i < xKeys.length; i++){
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;
  }
  }
  return true;
  }
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};