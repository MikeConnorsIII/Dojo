// function dothing(){
//     console.log("Hey I'm running the function!");
// }

// function welcome(firstName){
//     console.log("Welcome to the code, " + firstName);
// }

// function addTwo(x,y){
//     console.log("function is starting!");
//     var sum = x + y;
//     return sum;
//     console.log("function is done!");
// }

// // console.log(addtwo(5,6);
// // )
// var sum = addTwo(6,9);
// console.log(sum);



// welcome("Michael");
// dothing();
// dothing();
// dothing();
// dothing();
// for(var i = 0; i < 10; i++){
//     dothing();
// }

//The basic 13
//print all integers from 1 to 255
// function printNumbers(){
//     for(var i = 1; i <=255; i++)
//     console.log(i)
// }
// printNumbers();

// function printWithSum(){
//     var sum = 0; 
//     for(var i = 0; i <= 255; i++){
//         console.log(i); 
//         sum += i;
//         console.log("sum so far: " + sum);
//     }
// }

//     printWithSum();

    //given an array, find and print the largest element

    function findMax(arr){
    //max number is first number
    var max = arr[0];
    //loop through array
    for(var i = 0; i < arr.length; i++);
        console.log(arr[i]);
        //if current number is bigger than max
        if(arr[i] > max){
            max = arr[i];
        }
        return max;
            //current number is new max value
    //return max
    }

    var Arr = [4,1,5,3,7,-3,9,8,0,-2];
    findMax(Arr);

    function findMax(Arr){
        var max = Arr[0]
        for(var i = 0; 1 <Arr.length; i++){
            if(Arr[i] > max){
                max = Arr[i]
                return max;
            }
        }
    }