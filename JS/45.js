/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let num = new Array(10010).fill(20000000);

    num[0] = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j <= nums[i]; j++) {
            let now = i + j;
            if(now > num.length - 1) break;
            
            num[now] = Math.min(num[now], num[i] + 1);
        }
    }

    return num[nums.length - 1];
};

/*
題意：陣列每一格代表能夠跳幾格，找出跳到終點的最少步數。
想法：DP，每一格都跳跳看並記錄最小。轉移方程：dp[i]=min(dp[i], dp[i - j] + 1), 0 <= j <= nums[i], 0 < i <= 10000
複雜度：Ｏ(i * 1000)
*/
