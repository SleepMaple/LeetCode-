/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let len = nums.length, ans = -1;
    let num2 = new Array(nums.length + 1);
    num2[0] = 0;
    
    for(let i = 1 ; i <= len ; i++) {
        num2[i] = num2[i - 1] + nums[i - 1];
    }

    /*let str = "";
    for(let i = 0 ; i <= len ; i++) {
        str = str + num2[i] + " ";
    }
    console.log(str);*/

    for(let i = 0 ; i < len ; i++) {
        //console.log(num2[i], num2[len] - num2[i + 1]);

        if(num2[i] == num2[len] - num2[i + 1]){
            ans = i; 
            break;
        }
    }

    return ans;
};
