/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if (low % 2 === 1 && high % 2 === 1) {
        return (high - low) / 2 + 1;
    }
    else {
        return (high - low) / 2;
    }
};

/*
題意:給一個區間，找有多少個奇數。
想法:直接找，注意頭尾都是奇數的情形。
複雜度:O(1)。
*/
