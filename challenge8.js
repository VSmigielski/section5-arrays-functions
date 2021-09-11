// Creating a new array 
let cities = ['New York', 'Wommelgem', 'Ghent', 'Brussels', 'San Diego', 'Sierraville']

// The function you pass in is called a callback function
cities.forEach(function(items, index){
    console.log((index + 1) + ". " + items)
})

for (let myCities of cities) {
    console.log(myCities)
}