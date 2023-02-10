/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0, right = 0, one = -1, two = -1, table = new Array(100010).fill(0), ans = -1;

    for(; right < fruits.length; right++) {
        //初始化
        if(one == -1) {
            one = fruits[right];
            table[one]++;
        }
        //初始化
        else if(two == -1 && fruits[right] != one) {
            two = fruits[right];
            table[two]++;
        }
        else if(fruits[right] != one && fruits[right] != two) {
            //長度答案確認
            ans = Math.max(ans, right - left);
           
            //左邊界收縮
            while(table[one] != 0 && table[two] != 0) {
                //console.log(one, table[one], "--");
                table[fruits[left]]--;
                left++;
            }
            
            //更新籃子裡的水果是誰
            one = fruits[left];
            two = fruits[right];
            table[two]++;
        }
        else {
            table[fruits[right]]++;
        }
        //console.log(one, two);
    }
    //整串都可以
    ans = Math.max(ans, fruits.length - left);

    return ans;
};

/*
題意：找出兩個不同的數字相鄰最長的長度。
想法：滑動視窗，左邊滑動的關鍵是有一個table歸0了就可以繼續擴展右邊界。
複雜度：Ｏ(n)
*/
