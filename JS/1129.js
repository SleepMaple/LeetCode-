/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    let table = new Array(n).fill(10000000), queue = [], check = new Set();

    table[0] = 0;
    for(let i = 0; i < redEdges.length; i++) {
        if(redEdges[i][0] === 0) {
            queue.push([redEdges[i][1], 1, 1]);
            check.add(redEdges[i]);
        }
    }

    for(let i = 0; i < blueEdges.length; i++) {
        if(blueEdges[i][0] === 0) {
            queue.push([blueEdges[i][1], 0, 1]);
            check.add(blueEdges[i]);
        }
    }

    while(queue.length > 0) {
        let front = queue.shift();
        table[front[0]] = Math.min(table[front[0]], front[2]);
        //console.log(front[0], front[1], front[2]);
        
        if(front[1] === 1) {
            for(let i = 0; i < blueEdges.length; i++) {
                if(front[0] === blueEdges[i][0] && check.has(blueEdges[i]) === false) {
                    queue.push([blueEdges[i][1], 0, front[2] + 1]);
                    check.add(blueEdges[i]);
                }
            }
        }
        else {
            for(let i = 0; i < redEdges.length; i++) {
                if(front[0] === redEdges[i][0] && check.has(redEdges[i]) === false) {
                    queue.push([redEdges[i][1], 1, front[2] + 1]);
                    check.add(redEdges[i]);
                }
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(table[i] === 10000000) {
            table[i] = -1;
        }
    }

    return table;
};

/*
題意:給在一維地圖上的紅藍有向路徑，並規定紅藍交錯走，求到終點的最短路徑。
想法:有條件的BFS，有可能會產生環所以用SET來記錄是否有沒有用過這個邊。
複雜度:O(V + E)
*/