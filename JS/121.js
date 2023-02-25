/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minn = 2000000000, minnWhere, maxx = -1, maxxWhere, ans = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minn) {
            minn = prices[i];
            minnWhere = i;
        }

        if (prices[i] > maxx || minnWhere > maxxWhere) {
            maxx = prices[i];
            maxxWhere = i;
        }

        if (minnWhere < maxxWhere) {
            ans = Math.max(ans, maxx - minn);
        }

        //console.log(minn, maxx);
    }

    return ans;
};

/*
題意:
    給每天的股票價格，求最大收益。

想法:
    紀錄現在最小、在哪、現在最大、在哪。
    維護這四個值，注意最大值是否在最小值右邊，如果是就要更新最大值。

複雜度:
    O(n)。
*/
