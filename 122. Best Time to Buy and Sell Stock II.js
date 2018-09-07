/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let min = prices[0];
    let max = prices[1];
    const maxProfit = [];
    let currentMaxProfit = 0;
    for (const cur of prices) {
        // record each increasing range
        // range breaks when [current value] < [local minimum value or local maximum value]
        if (cur < min || cur < max) {
            min = max = cur;
            maxProfit.push(currentMaxProfit);
            currentMaxProfit = 0;
        }
        else {
            if (cur - min > currentMaxProfit) {
                currentMaxProfit = cur - min;
                max = cur;
            }
        }
    }
    maxProfit.push(currentMaxProfit);
    return maxProfit.reduce((x, y) => x + y, 0);
};