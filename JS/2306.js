/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let table = [], ans = 0;

    for (let i = 0; i < 26; i++ ) {
        table[i] = new Set();
    }

    for (let i = 0; i < ideas.length; i++) {
        table[ideas[i].charCodeAt(0) - 97].add(ideas[i].slice(1, ideas[i].length));
    }
    //console.log(table);
    
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            let cnt = 0;
            for (let k of table[i]) {
                if (table[j].has(k) === true && table[i].size > 0 && table[j].size > 0) {
                    //console.log(i, j, k);
                    cnt++;
                }
            }

            ans += ((table[i].size - cnt) * (table[j].size - cnt));
        }
    }

    return ans * 2;
};

/*
題意:任兩個字串交換開頭第一個字母後若無出現過，則+2，輸出最後有幾種。
想法:
    用SET去紀錄26個字母開頭對應到哪一些子字串有出現過，
    窮舉所有可能開頭並統計子字串一共重複多少次，
    Ex: 
        lack, back，子字串皆為ack，故答案為0。

    也就是扣掉共同的子字串後相乘窮舉的兩個SET大小。
    依據此想法求得最後答案，最後記得要乘上2。
    
複雜度:
    O(n)，紅黑樹SET查詢的複雜度為logn，故還是以For迴圈為大。