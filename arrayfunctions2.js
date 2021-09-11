// Create an array of cities
let cities = ["New York", "London", "Paris", "Berlin"]

// Sorts alphabetically A-Z
console.log(cities.sort())

// Looks for the word "Paris", case sensitive
console.log(cities.filter(function(city) {
    return city == "Paris"
}))