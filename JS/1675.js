/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    let arr = [], pq = new MaxPriorityQueue(), ans = 2000000000;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) pq.enqueue(nums[i] * 2); 
        else pq.enqueue(nums[i]);
    }
    
    while (pq.front().element % 2 === 0) {
        const { element } = pq.dequeue();

        pq.enqueue(element / 2);

        ans = Math.min(ans, pq.front().element - pq.back().element);
    }

    return ans;
};

/*
題意:
    給一個陣列，元素是偶數的話可以除與二，元素是奇數的話可以乘與二，求陣列中最大值跟最小值相減之最小可能。

想法:
    看解答的，看前好難看後好簡單> 0 <。
    先把最小的弄成偶數(存進去的時候把奇數都轉成偶數)，
    最大的再慢慢往下除直到不是偶數(也就代表只能再往上乘)，
    最小的因為是偶數所以只能再往下除。

    那會不會存在最大的偶數/2比最小的偶數還小情形發生? => 不可能(Ex: 2 4，4/2=2，也就是頂多相等)。

複雜度:
    O(mlogn)，m為做幾次操作 || O(nlogn)，n為元素數量。
*/
