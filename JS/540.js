/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = left  + Math.floor((right - left) / 2);
        //console.log(left, mid, right);

        if (mid % 2 === 0 && nums[mid] === nums[mid + 1]) {
            left = mid + 1;
        }
        else if (mid % 2 === 0 && nums[mid] === nums[mid - 1]) {
            right = mid - 1;
        }
        else if (mid % 2 === 1 && nums[mid] === nums[mid - 1]) {
            left = mid + 1;
        }
        else if (mid % 2 === 1 && nums[mid] === nums[mid + 1]) {
            right = mid - 1;
        }
        else {
            return nums[mid];
        }
    }

    return nums[left];
};

/*
題意:找出一個數字的是誰。
想法:看複雜度感覺就是二分搜。
0 0 1 1 2 
0 1 2 3 4 

0 1 1 2 2
0 1 2 3 4

1 1 2
0 1 2

1 2 2
0 1 2

複雜度:O(n)。
*/
