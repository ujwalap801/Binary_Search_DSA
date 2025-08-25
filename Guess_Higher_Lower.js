/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        let num = guess(mid);
        if (num === 0) {
            return mid;
        } else if (num < 0) {

            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }

    return -1;
};