/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x;
    if (number < 0) return false;
    if (number === 0) return true;
    const digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    for (let i = 0; i <= digits.length / 2; i++) {
        if (digits[i] !== digits[digits.length - i - 1]) return false;
    } 
    return true;
};