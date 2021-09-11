// Creating a new array 
let shoppingList = ['eggs', 'milk', 'bread', 'cereal', 'soda', 'apples']

for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i])
}

// The function you pass in is called a callback function
shoppingList.forEach(function(items, index){
    console.log((index + 1) + ". " + items)
})