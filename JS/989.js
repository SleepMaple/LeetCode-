/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let kR = [], numR = num.reverse(), carry = 0, sum = [];

    while (k > 0) {
        kR.push(k % 10);
        k = parseInt(k / 10);
    }

    if(kR.length > num.length) {
        for (let i = 0; i < num.length; i++) {
            carry = parseInt(kR[i] + num[i] + carry);
            sum.push(carry % 10);
            carry = parseInt(carry / 10);
        }

        for (let i = num.length; i < kR.length; i++) {
            carry = parseInt(kR[i] + carry);
            sum.push(carry % 10);
            carry = parseInt(carry / 10);
        }

        if (carry === 1) {
            sum.push(1);
        } 
    }
    else {
        for (let i = 0; i < kR.length; i++) {
            carry = parseInt(kR[i] + num[i] + carry);
            sum.push(carry % 10);
            carry = parseInt(carry / 10);
        }

        for (let i = kR.length; i < num.length; i++) {
            carry = parseInt(num[i] + carry);
            sum.push(carry % 10);
            carry = parseInt(carry / 10);
        }

        if (carry === 1) {
            sum.push(1);
        }
    }

    return sum.reverse();
};

/*
題意:給一個陣列跟數字，求相加過後的數字陣列。
想法:加法模擬。
複雜度:O(n)。n為最大數字的陣列長度
*/
