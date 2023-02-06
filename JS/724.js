/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let len = nums.length, ans = -1;
    let num2 = new Array(nums.length + 1);
    num2[0] = 0;
    
    for(let i = 1 ; i <= len ; i++) {
        num2[i] = num2[i - 1] + nums[i - 1];
    }

    /*let str = "";
    for(let i = 0 ; i <= len ; i++) {
        str = str + num2[i] + " ";
    }
    console.log(str);*/

    for(let i = 0 ; i < len ; i++) {
        //console.log(num2[i], num2[len] - num2[i + 1]);

        if(num2[i] == num2[len] - num2[i + 1]){
            ans = i; 
            break;
        }
    }

    return ans;
};

/*
題意：左邊相加的連續數列是否等於右邊相加的連續數列，左右長度不定，輸出該位置。
想法：求總和先找前綴和，接著窮舉所有位置確認左數列之總和等於右數列之總和。如果不找前綴和每次計算總和都需要跑Ｏ(n)，複雜度會炸掉。
複雜度：Ｏ(n)
*/
