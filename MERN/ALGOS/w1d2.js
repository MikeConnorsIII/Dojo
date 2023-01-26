/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

/*****************************************************************************/

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param   {Array<number>} nums
 * @return  {Array<number>} The given array after being sorted.
 */
const selectionSort = (nums = []) => {
    for (let i = 0; i < nums.length; i++) { 
        // for loop to go through arr numbers
        console.log(i);
      let minNum = i;
    //   temporary store first number and stores as minNum
      for (let j = i + 1; j < nums.length; j++) {
        // next for loop will start second number by adding i+1
        if (nums[j] < nums[minNum]) {
            // if second number is smaller than our stored minNum
          minNum = j;
        //   it will store j to minNum
        }
      }
      if (minNum !== i) {
        // if minNum is not equal to i
        [nums[i], nums[minNum]] = [nums[minNum], nums[i]];
        // swap arr's minNum in front of arr[i] number
      }
    }
    return nums;
  }

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));
console.log(selectionSort(expected));

module.exports = { selectionSort };