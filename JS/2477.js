/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    let adj = new Array(roads.length + 1), ans = 0;

    for (let i = 0; i <= roads.length; i++) {
        adj[i] = [];
    }

    for (let i = 0; i < roads.length; i++) {
        adj[roads[i][0]].push(roads[i][1]);
        adj[roads[i][1]].push(roads[i][0]);
    }
    //console.log(adj);

    dfs = (cur, pre) => {
        let people = 1;
        for (let child of adj[cur]) {
            if(child != pre) {
                people += dfs(child, cur);
            }
        }

        if (cur) {
            ans += Math.ceil(people / seats);
        }

        return people;
    }

    dfs(0, -1);

    return ans;
};

/*
題意:給一棵樹以及一個減少節點間路徑的條件，節點與節點間的路徑皆為1，求所有節點到編號0的樹節點最短路徑總和。
想法:先把adjacency list建出來，再由節點0開始跑DFS，計算子節點總共有多少人，需要幾台車。
複雜度:O(n)
*/