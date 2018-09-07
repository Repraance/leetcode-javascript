/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var positive = x > 0;
    if (Math.abs(x) > Math.pow(2, 31)) {
        return 0;
    }
    var str = String(Math.abs(x));
    var newStr = '';
    for (var i = str.length - 1; i>=0; i--) {
        newStr += str[i];
    }
    var result = Number(newStr);
    if (!positive) {
        result = -result;
    }
    if (Math.abs(result) > Math.pow(2,31)) {
        return 0;
    }
    return result;
};