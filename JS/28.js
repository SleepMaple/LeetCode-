/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let check = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                check = false;
                break;
            }
        }

        if (check === true) {
            return i;
        }
    }

    return -1;
};

/*
題意:
    尋找needle在haystack的哪裡出現，回傳位置。

想法:
    暴力解?
    好像有聞到KMP的味道。

複雜度:
    O(n * m)。
*/
