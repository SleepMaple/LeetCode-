/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let where = 0;

    for (; where < nums.length; where++) {
        if (nums[where] >= target) break;
    }

    return where;
};

/*
題意:找這一個數字在陣列的哪裡
想法:直接找，也可以二分搜
複雜度:O(n)
*/
