// time complexity: O(n^2)
// Not good solution

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const water = Math.min(height[i], height[j]) * (j - i);
            if (water > max) max = water;
        }
    }
    return max
};

// time complexity: O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea2 = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        if (area > max) max = area;
        if (height[l] < height[r]) l++;
        else r--;
    }
};
