/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    if (word.match(/[a-z]+/) == word){
        return true;
    } else if (word.match(/[A-Z]+/) == word){
        return true;
    } else if (word.match(/[A-Z][a-z]+/) == word){
        return true;
    } else {
        return false;
    }
};