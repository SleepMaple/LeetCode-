/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let tmp, arr = new Array(2 * n);

    for(let i = 0; i < 2 * n; i++) {
        // y
        if(i % 2 == 1) {
            tmp = parseInt(i / 2 + n);
            arr[i] = nums[tmp];
        }
        // x
        else {
            arr[i] = nums[i / 2];
        }
    }

    return arr;
};
