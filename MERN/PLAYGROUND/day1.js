// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (var index = 0; index < names.length; index++) {
//       var name = names[index];
  
//       console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

// ------------------------ const vs let vs var----------------
var food = "duck"
food = "pizza"
// console.log(food)
// replacing var below, let works, 
for(let i = 0; i < 10; i++){
    // console.log(i);
}
// const is immutable

const skills = ["debugging", "sleeping", "drinking coffee"]
// console.log(skills)
skills.push("Videogames") //pushing videogames to the end of the array
// console.log(skills)

skills[0] = "drinking"
// console.log(skills)


// ------------------------ hoisting----------------

// ------------------------ destructuring----------------
const post = {
    title: "First day of Javascript",
    //key: "value"
    viewers: 1000,
    likes: 500,
    description: "An awesome day of JS",
    hashtags: ["excellent", "great", "fun"]
}
console.log(post)

console.log(post.title)
console.log(post.viewers)
console.log(post.likes)

const {title: newTitle, viewers, likes, description, hashtags} = post
console.log(newTitle, viewers, likes, description, hashtags)

const trips = ["Japan", "Spain", "Bolivia", "Australia", "Colombia"]
console.log(trips)

// destructure
const [first, , third] = trips
console.log(trips)
console.log(first)
console.log(third)
// console.log(first) would print japan because you are assigning a key named first to japan

// ------------------------ spread/rest----------------
const trips2 = [...trips, "Greece", "Aregentina", "Brazil", "Italy"]
console.log(trips2)

// ... adds 

// ------------------------ arrow functions----------------

// es5
function printHello(){
    console.log("Hello, Ruben")
}
printHello()

// es6
const printHello2 = () => {
    console.log("Hello, Ruben")
}
// long handed
function addPrice(price, discount){
    return price * discount
}
console.log(addPrice(100,.09))

// short handed
const addPrice2 = (price, discount) => price * discount;
console.log(addPrice2(100,.09))

const addPrice3 = (price, discount) => (price * discount);
console.log(addPrice3(100,.09))

// ------------------------ ternary functions----------------

// ------------------------ const vs let vs var----------------
