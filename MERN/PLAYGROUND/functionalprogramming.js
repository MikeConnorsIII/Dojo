// -----ternary operator---------
const rating = 7
// condition
if(rating >= 7){
    // true
    // console.log("This is a good movie")
} else {
    // console.log("This is a terrible movie")
}
// condition // true                              // false
// rating > 6 ? console.log(`This is a great movie because it was rated ${rating} from IMBD`) : console.log("This is a terrible movie")

// -----callback functions---------
const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, they were charged ${price}`)
}

const retuningItem = (person, price) =>{
    console.log(`Processing refund for ${person}, he will get back ${price}`)
}

const parentFunction = (callback, person, price) => {
    //callback function
    console.log("Welcome to my store")
    callback(person, price)
}
// callback can be named anything

const ruben = () => {}

parentFunction(makingPurchase, "Laura", 1000)
parentFunction(retuningItem, "Laura", 1000)
// -----object.freeze(------)
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);
// -----.map & .filter---------
const prices = groceryList.map((items) => {
    return items.price
})
console.log(items)

const elements = groceryList.map((items, i) => `${i} - ${item.Name}`)
console.log(elements)
// item is the bucket

const cheapItem = shoppingList.filter((item) => item.price < 50)
console.log(cheapItem)

const cheapItemNames = shoppingList.filter((item) => item.price > 100).map((item) => cheapItemNames.itemName)
console.log(cheapItemNames)