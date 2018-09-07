/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const symbolIndex = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const curChar = s[i];
        const curNum = symbolIndex[curChar];
        const nextChar = s[i+1] || 0;
        const nextNum = nextChar ? symbolIndex[nextChar] : 0;
        if (curNum < nextNum) {
            result -= curNum;
        } else {
            result+= curNum;
        }
    }
    return result;
};