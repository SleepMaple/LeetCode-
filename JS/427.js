/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    
    const checkValue = (start, size) => {
        let valToCheck = grid[start[0]][start[1]];

        for (let i = start[0]; i < start[0] + size; i++) {
            for (let j = start[1]; j < start[1] + size; j++) {
                if (grid[i][j] !== valToCheck) {
                    return -1;
                }
            }
        }

        return valToCheck;
    }

    const createNode = (start, size) => {
        let value = checkValue(start, size);

        if (value !== -1 || size === 1) {
            let n = new Node(value, true, null, null, null, null);
            return n;
        }

        let nextSize = size / 2;
        let topLeft = createNode(start, nextSize);
        let topRight = createNode([start[0], start[1] + nextSize], nextSize);
        let bottomLeft = createNode([start[0] + nextSize, start[1]], nextSize);
        let bottomRight = createNode([start[0] + nextSize, start[1] + nextSize], nextSize);

        return new Node(1, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    return createNode([0, 0], grid.length);
};

/*
題意：
    依據題目敘述建立Quad Tree。

想法：
    遞迴，但是JS語法不會寫＞＜。
    參考https://leetcode.com/problems/construct-quad-tree/solutions/976936/recursive-javascript-solution/?languageTags=javascript
    清晰易懂。

複雜度：
*/
