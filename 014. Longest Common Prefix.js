/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    strs.sort((a, b) => a.length - b.length);
    const str0 = strs[0];
    let index = -1;
    for (let i = 0; i < str0.length; i++) {
        const c = str0[i];
        const same = strs.every(s => s[i] === c);
        if (same) index = i;
        else break;
    }
    return str0.slice(0, index + 1);
};