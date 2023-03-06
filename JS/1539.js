/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i, cnt = 0, arrIndex = 0;

    for (i = 1; cnt < k; i++) {
        if (arr[arrIndex] === i) {
            arrIndex < arr.length ? arrIndex++ : arr.length - 1;
        }
        else {
            cnt++;
            console.log(i);
        }
    }

    return i - 1;
};

/*
題意:
    給一個從1開始的陣列，輸出第k個沒有在陣列中出現的數字。

想法:
    列舉1開始的各個數字，並記錄有沒有在陣列中，沒有的話就++直到符合題意k。

複雜度:
    O(n)。
*/
