/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxDistance = function(grid) {
    let queue = [], zero = false, d = [[0,1], [0,-1], [1,0], [-1,0]], dis = -1;

    for(let row = 0; row < grid.length; row++) {
        for(let column = 0; column < grid[0].length; column++) {
            if(grid[row][column] === 1) {
                queue.push([row, column, 0]);
            } 
            else {
                zero = true;
            }
        }
    }

    if (queue.length === 0 || !zero) {
        return -1;
    }
    
    while(queue.length > 0) {
        let cell = queue.shift();
        dis = Math.max(dis, cell[2]);

        for (let i = 0; i < d.length; i++) {
            let x = cell[0] + d[i][0];
            let y = cell[1] + d[i][1];

            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 0) {
                queue.push([x, y, cell[2] + 1]);
                grid[x][y] = 1;
            }
        }
    }
    return dis;
};

/*
題意:1代表陸地，0代表水，尋找離陸地最遠的水格子。
想法:BFS填填看。
複雜度:O(n^2)
*/