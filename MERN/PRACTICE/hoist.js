// console.log(example);
// let example = "I'm the example!";  

// console.log(hello);                                   
// var hello = 'world';   
// wont console log because the var is below the console log, will come back undefined
// was correct

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// this one looks like it will print magnet because it is specified within the function
// correct


// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// prediction: the function was not called so i believe it will return as undefined
// lesson: it returned brendan because the variable was defined and console logged

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// prediction it will print chicken, half-chicken
//i was correct, var went to the top but was reasigned to half-chicken
// ------------------------------------------comback
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// prediction is undefined
// the mean was not a function was the outcome. 


// console.log(genre);
// var genre = "disco"; //undefined
// const rewind = () => {
//     genre = "rock";
//     console.log(genre); //rock
//     var genre = "r&b";
//     console.log(genre);//r&b
// }
// rewind();
// console.log(genre); //disco
// prediction undefined
//lesson it will continue after the disco, i thought it would stop there with an error

// dojo = "san jose";
// console.log(dojo);//san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);//seattle
//     var dojo = "burbank";
//     console.log(dojo);//burbank
// }
// console.log(dojo);

// prediction san jose seattle burbank san jose

// console.log(makeDojo("Chicago", 65)); //{name: "Chicago" , students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0));//closed for now
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){

//     //you can add dojo.hiring = to a string so it has a key
//         dojo = "closed for now";//this line created an issue because you cant add the string to a dictionary
//     }
//     return dojo;
// }

// prediction above, cant add a string to a dictionary
