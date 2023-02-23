/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let arr = [], pq = new MaxPriorityQueue(), pL = 0;

    for (let i = 0; i < capital.length; i++) {
        arr.push([capital[i], profits[i]]);
    }
    arr.sort((a, b) => a[0] - b[0]);

    while (k--) {
        while (pL < arr.length && arr[pL][0] <= w) {
            pq.enqueue(pL, arr[pL][1]);
            pL++;
        }

        if (pq.size() === 0) {
            return w;
        }

        w += pq.dequeue().priority;
    }

    return w;
};

/*
題意:
    k是最多專案數量，w是初始資本額，profit為各專案執行成功之收益，capital為各專案執行所需要的資本。
    求最大收益。
想法:

    1. 有條件的0/1背包問題?
    2. 排序，每次取最大收益出來(priority_queue?) => JS沒用過= . = 手刻又麻煩直接看解答
    
複雜度:
    O(nlogn)。
*/
