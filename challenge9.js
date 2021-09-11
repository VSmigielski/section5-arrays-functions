// Mini Challenge
// Build an array of numbers
// Make some of the #s over 25
// Filter to search for numbers 
// higher than or equal to 25

// Create an array of cities
let numbers = [1, 52, 6, 9, 26, 19, 25, 34, 45]

// Sort to make the next call look better
numbers.sort()

// Looks for the word "Paris", case sensitive
console.log(numbers.filter(function(over25) {
    return over25 >= 25
}))

let numbers2 = [1, 52, 6, 9, 26, 19, 25, 34, 45]

// Looks for the word "Paris", case sensitive
console.log(numbers2.map(function(num) {
    return num * 2
}))

let stringArray = ['joined', 'together']

// Joins the numbers2 and stringArray together
console.log(numbers2.concat(stringArray))

// Does not change the original arrays
console.log(numbers2)
console.log(stringArray)

// Joins the two arrays together (similar to zip)
// Not very pretty to look at
console.log(numbers2.join(stringArray))

// This one looks better and more commonly used
stringArray = ['...']
console.log(numbers2.join(stringArray))

// Reverses the array
console.log(numbers2.reverse())

// Reduce the elements down to a single value
// Sums all the numbers together
console.log(numbers2.reduce(function(result, number) {
    return result + number
}))
