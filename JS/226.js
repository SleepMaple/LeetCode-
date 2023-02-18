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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;

    let queue = [];
    queue.push(root);
    
    while (queue.length) {
        let node = queue.shift();
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
};


/*
題意:將根節點以外的子樹左右翻轉。
想法:BFS，左右交換
複雜度:O(n)
*/
