/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0, ans = "", rA = [], rB = [], ansR = "";

    for (let i = a.length - 1; i >= 0; i--) {
        rA.push(a[i]);
    }

    for (let i = b.length - 1; i >= 0; i--) {
        rB.push(b[i]);
    }

    if (a.length < b.length) {
        for(let i = a.length; i < b.length; i++) {
            rA.push(0);
        }
    }
    else {
        for(let i = b.length; i < a.length; i++) {
            rB.push(0);
        }
    }
    //console.log(rA, rB);
    
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        let sum = parseInt(rA[i]) + parseInt(rB[i]) + carry;
        if (sum == 3) {
            carry = 1;
            ans += '1';
        }
        else if (sum == 2) {
            carry = 1;
            ans += '0';
        }
        else if (sum == 1) {
            carry = 0;
            ans += '1';
        }
        else {
            carry = 0;
            ans += '0';
        }
    }
    if (carry === 1) {
        ans += '1';
    }

    for (let i = ans.length - 1; i >= 0; i--) {
        ansR += ans[i];
    }
    
    return ansR;
};
/*
題意:模擬加法
想法:模擬，JS的字串跟數字要特別注意>_<
複雜度:O(n)
*/
