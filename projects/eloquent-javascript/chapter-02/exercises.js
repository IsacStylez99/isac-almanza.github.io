
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  var string = ''
  for (var i = 1; i <= number; i++) {
    string += '#'
    console.log(string)
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  var i = 0
  for (var i = 1; i <= 15; i++)
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('fizzbuzz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(i)
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  var even = ''
  var odd = ''
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      even += ' '
      odd += '#'
    } else {
      even += '#'
      odd += ' '
    }
  } 

  var array = []
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      array.push(even)
  } else {
    array.push(odd)
  } 
  } array.push('')
  console.log(array.join('\n'))
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}