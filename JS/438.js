/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sL = s.length, pL = p.length, ans = [], pTable = new Array(30).fill(0), sTable = new Array(30).fill(0);

    for(let i = 0; i < pL; i++) { 
        let ss = s.charCodeAt(i) - 97;
        sTable[ss]++;
        let pp = p.charCodeAt(i) - 97;
        pTable[pp]++;
    }
    //console.log(sTable);

    for(let i = 0; i <= sL-pL; i++) {
        if(i != 0){
            let tmp1 = s.charCodeAt(i - 1) - 97;
            sTable[tmp1]--;
            let tmp2 = s.charCodeAt(i - 1 + pL) - 97;
            sTable[tmp2]++;
            console.log(tmp1, tmp2, sTable);
        }

        let check = true;

        for(let j = 0; j < 26; j++) {
            if(pTable[j] != sTable[j]) {
                check = false; break;
            }
        }

        if(check) {
            ans.push(i);
        }
    }

    return ans;
};

/*
想法 : 滑動視窗比字串是否相同。
複雜度 : O(n)。
*/
