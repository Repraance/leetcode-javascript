/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    if (!nums.length) return 0;
    const max = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) max.push(nums[i]);
        else if (i === 1) max.push(Math.max(nums[0], nums[i]));
        else max.push(Math.max(max[i - 1], max[i - 2] + nums[i]));
    }
    return max.pop();
};