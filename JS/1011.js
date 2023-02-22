/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let num = 0, sum = 0, check = false, dayCount, daySum;

    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        num = Math.max(num, weights[i]);
    }
    if (Math.floor(sum / days) > num) {
        num = Math.floor(sum / days);
    }
    
    while (check == false) {
        dayCount = 0; 
        daySum = 0;

        for (let i = 0; i < weights.length; i++) {
            daySum += weights[i];
            if (daySum > num) {
                dayCount++;
                daySum = weights[i];
            }    
        }
        if (daySum >= weights[weights.length - 1]) {
            dayCount++;
        }

        if (dayCount <= days) {
            check = true;
        }
        else {
            num++;
        }
    }

    return num;
};

/*
題意:
    給貨物重量跟天數限制，把貨載完的前提下，求最小船能載貨的重量。
想法:
    因為貨物有順序性，貪婪的想法(輕的貨物盡量一起載)不適用。
    枚舉船能載的重量? 
        1. 把貨物全部相加 / 總共有幾天 = 每一天最少要載多少重量。
        2. 船的重量至少要是最重貨物，才能把它載去。
複雜度:
    O(n)，常數或許很大(?)
*/
