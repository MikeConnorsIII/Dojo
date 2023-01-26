// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers Calculate the absolute difference between the sums of its diagonals
    The absolute difference between two variables, is simply one subtracted from the other and you get the sum.
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    tep left to bottom right diagonal: 1 + 5 + 9 = 15
    top right to bottom left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    top left to bottom right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    top right to bottom left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
    const diagonalDifference = array => {
        let result1 = 0;
        let result2 = 0;
        let yAxis= 0;
        let xAxis = 0;
        let counter = array.length -1;
        
        for(let y = 0; y <array.length; y++){
            // console.log("this is the Y axis " + yAxis);
            for(let x = 0; x < array[y].length; x++){
                // console.log("this is the X axis " + xAxis)
                if(x === xAxis && y === yAxis){
                    result1 += array[yAxis][xAxis];
                    // result2 += array[yAxis];
                    result2 += array[yAxis][counter]
                    counter--;
                    yAxis++;
                    xAxis++;
                }
                
            }
        }
        // console.log(result1)
        // console.log(result2)
        // console.log(result1 - result2)
        return Math.abs(result1 - result2)
    }
    

    
console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

/*****************************************************************************/