/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let len = s.length, cnt1 = 0, cnt2 = 0, check = true;
    let table1 = new Array(255);
    let table2 = new Array(255);
    let ss = new Array(50010);
    let tt = new Array(50010);

    for(let i = 0 ; i < len ; i++) {
        if(table1[s[i]] === undefined){
            table1[s[i]] = cnt1++;
        }
        ss[i] = table1[s[i]];

        if(table2[t[i]] === undefined){
            table2[t[i]] = cnt2++;
        }
        tt[i] = table2[t[i]];

        console.log(ss[i], tt[i]);
        if(ss[i] !== tt[i]){
            check = false;
            break;
        }
    }

    return check;
};