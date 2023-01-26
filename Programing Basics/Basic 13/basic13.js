// 1. 
// function print1to255(){
// for (i=1; i<=255; i++){
//     console.log(i);
// }
// }
// print1to255();

// 2. 
// function printOdds1to255(){
// for (i=1; i<=255; i++){
//     if(i % 2 != 0){
//     console.log(i);
//     }
// }
// }
// printOdds1to255();

// 3. 
// function printIntsAndSum0to255(){
// var sum = 0;
// for(i=0; i <= 255; i++){
//     sum = sum + i; 
//     console.log("The current integer is: " + i);  
//     console.log("The sum so far is: " + sum);
// }
// }

// printIntsAndSum0to255();

// 4. 
// var arr = [4,3,2,1,2,3,4,5,4];

// function printArrayVals(arr){
//     for(i=0;i < arr.length; i++)
//     console.log(arr[i]);
// }
// printArrayVals(arr);

// 5. 
// var arr = [4,3,2,1,2,3,4,5,4];

// function printMaxOfArray(arr){
// var max = 0 
// for(i=0; i < arr.length; i++){
//     if(arr[i] > max){
//     max = arr[i];
//     }
// }
// console.log(max);
// }

// printMaxOfArray(arr);

// 6. 
// function printAverageOfArray(arr){
//     var sum = 0;
//     var Avg = 0;
//     for (i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     Avg = sum / arr.length;
//     console.log(Avg);
// }
// printAverageOfArray(arr);

//7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1
// and 255 (inclusive).

// function ReturnOddsArray1To255(){
//     var oddsArray = [];
//     for(i=1;i<=255;i++){
//         if(i % 2 == 1){
//             oddsArray.push(i);
//         }
//     }
//     return oddsArray;
// }

// console.log(ReturnOddsArray1To255());

// 8. Square the Values
// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// -----------------------------
// var arr = [1,2,3,4,5,6,7,8,9];
// function squareArrayVals(arr){
//     for(i=0;i<=arr.length;i++){
//         arr[i]=arr[i] * arr[i];
//     }
//     return arr;
// }
// squareArrayVals(arr);
// -------------------------
// 9. Greater than Y
// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.

// function printArrayCountGreaterThanY(arr, y) {

// }

// printArrayCountGreaterThanY(arr, y)


// 10. Zero Out Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

// var arr = [4,-1,2,-3,2,3,-10,5,4];
// function printMaxOfArray(arr){
// // var max = 0;
// for(i=0; i <= arr.length; i++){
//     if(arr[i] < 0){
//     arr[i] = 0
//     }
// }
// console.log(arr);
// }

// printMaxOfArray(arr);

// printMaxOfArray(arr);

// 11. Max, Min, Average
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.


// 12. Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.


// 13. Swap String For Array Negative Values
// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
