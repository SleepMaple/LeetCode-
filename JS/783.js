/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let ansMin = 1000000, table = [];

    const findM = root => {
        if (root) {
            table.push(root.val);
        
            findM(root.left);
            findM(root.right);
        }
    };
    findM(root);
    table.sort(function(a, b) {
        return a - b;
    });
    //console.log(table);

    for (let i = 1; i < table.length; i++) {
        ansMin = Math.min(ansMin, table[i] - table[i - 1]);
    }

    return ansMin;
};

/*
題意:找出一棵樹裡差異最小的兩個數字，輸出其相差之值。
想法:遞迴走訪二元樹並將元素放入陣列，陣列排序並尋找差異最小的pair。
複雜度:O(nlogn)，排序。
*/
