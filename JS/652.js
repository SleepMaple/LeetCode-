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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map =　new Map(), ans = [];
    
    function dfs(node) {
        if (node === null) {
            return "";
        }

        let str = node.val;
        let left = "L" + dfs(node.left);
        let right = "R" + dfs(node.right);
        str = left + str + right;

        if (map.get(str) === undefined) {
            map.set(str, [1, node]);
        }
        else{
            map.set(str, [2, node]);
        }

        return str;
    }
    dfs(root);
    
    for (let [key, value] of map.entries()) {
        if (value[0] === 2) {
            ans.push(value[1]);
        }
    }
    return ans;
};

/*
題意：
    找出相同的子樹，回傳各個子樹的根節點。

想法：
    DFS走訪各個子樹，存進map看有沒有重複，沒有重複就將該節點加入string。 
    最後輸出重複的子樹。

複雜度：
    Ｏ(n)。（n為節點數）

*/
