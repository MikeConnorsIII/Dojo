// @@ -1,112 +1,34 @@
/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/
const str1 = "b70a164c32a20c10j3a15";
const expected1 = "a199b70c42j3";
/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
// function rehash(s) {}
/*****************************************************************************/
/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(n + n(log(n))) linearithmic. The n(log(n)) is from sorting.
 * Space: O(2n) -> O(n) linear. Duplicate storage of str in obj and new str.
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
const rehash = (str) => {
    //
    let hashmap = []
    let numberTemp = {}
    for (let char in str){
        if (parseInt(str[char])){

            numberTemp+=str[char]
            else if(str[char == NaN]){
                
            }

            let char = str[char]
            hashmap.push({str[char] : parseInt(numberTemp)})
        }
    }
    console.log(hashmap)
}
console.log(rehash(str1));
