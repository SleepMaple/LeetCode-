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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let queue = [], ans = [], fromLeft = true;
    queue.push(root);

    while (queue.length) {
        let nodeList = [], levelNodes = queue.length;
        
        for (let i = levelNodes; i > 0; i--) {
            let curNode = queue.shift();

            if (fromLeft === true) {
                nodeList.push(curNode.val);
            }
            else {
                nodeList.unshift(curNode.val);
            }

            if (curNode.left != null) {
                queue.push(curNode.left);
            }

            if(curNode.right != null) {
                queue.push(curNode.right);
            }
        }

        fromLeft = !fromLeft;
        ans.push(nodeList);
    }

    return ans;
};
/*
題意：給一棵二元樹，蛇行切割並輸出每一個LEVEL的值。
想法：BFS，左跟右先進QUEUE要注意。
複雜度：O(n)，n為節點數。
*/
