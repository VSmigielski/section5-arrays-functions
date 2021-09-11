// Create an array of cities
let cities = ["New York", "London", "Paris", "Berlin"]

// Adds the element to the end of the array
cities.push("Wommelgem")

// Log the cities
console.log(cities)

// Removes the last element from the list
cities.pop()

// Log the cities
console.log(cities)

// Saves the element that is popped within itself
// console.log(cities.pop())

// Adds the element to the beginning of the array
cities.unshift('Dublin')

// Log the cities
console.log(cities)

// Removes the first element of the array
cities.shift()

// Saves the element that is shifted within itself
// console.log(cities.shift())

// Log the cities
console.log(cities)

// Returns the index of the element 
// The search is case sensitive
console.log(cities.indexOf('Paris'))

// Cuts the array from index given to the end
// let newCities = cities.splice(2)

// console.log(newCities)

// This can also take two parameters 
// but it removes the cut out pieces from the original array
// moves elements from an array to a new array
let newCities = cities.splice(1,2)

console.log(newCities)

console.log(cities)

// Create an array of cities
let cities2 = ["New York", "London", "Paris", "Berlin"]

// Slice doesn't affect the original array
// Non-inclusive on the upper end
// copies elements from an array to a new array
let newCities2 = cities2.slice(1,3)

console.log(newCities2)
console.log(cities2)