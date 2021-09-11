// Create an array
let numArray = [3, 7, 6]

// Returns the length of the array
console.log(numArray.length)

// Returns the number at the index given
console.log(numArray[1])

// Return the whole array
console.log(numArray)

// Change one of the numbers at the index given
numArray[2] = 50
console.log(numArray)

// Assign a number to an index that DNE
numArray[3] = 50
console.log(numArray)

// This will show 2 empty spaces since the array stops at index 3
numArray[6] = 50
console.log(numArray)

// Create another array
let numArray2 = new Array(3,7,6)
console.log(numArray2)

// Create new array this is 3 undefined elements
let numArray3 = new Array(3)
console.log(numArray3)

// Creates an empty array
let numArray4 = []
numArray4[0] = 3
numArray4[1] = 7
numArray4[2] = 6

// Copies first element to num1
// Copies second element to num2
// Disregards third element in array
let[num1, num2] = numArray

let[num3, num4, num5, num6, num7] = numArray

console.log(num1 + " and " + num2)
console.log(numArray)

console.log(num7)

// Leave an empty placeholder so skip an element
let[num8, ,num9] = numArray
console.log(num8, num9)

num1 = 2
num2 = 7

[num2, num1] = [num1, num2]

console.log(num1 + " and " + num2)