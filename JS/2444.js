/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let p1 = -1, p2 = -1, sum = 0, left = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= minK && nums[i] <= maxK) {
            if (nums[i] === minK) {
                p1 = i;
            }
            if (nums[i] === maxK) {
                p2 = i;
            }
            if (p1 != -1 && p2 != -1) {
                sum += Math.min(p1, p2) - left;
            }
        }
        else {
            left = i;
            p1 = p2 = -1;
        }
    }

    return sum;
};

/*
題意:
    給一個陣列，找出一個字串包含符合題目的值有幾種可能。
    
想法:
    滑動視窗。
    注意要多維護一個左邊界。

複雜度:
    O(n)。
*/
