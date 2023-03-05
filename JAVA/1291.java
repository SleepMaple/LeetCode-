class Solution {
    List<Integer> ans = new ArrayList<>();
        
    void check(int len_max, int first, int low, int high){
        int tmp = 0, dig = 0, tmp2 = 0;
        for(int i=0 ; i < len_max && first < 10 ; i++){
            tmp *= 10;
            tmp += (first++);    
        }

        tmp2 = tmp;
        while(tmp2 != 0){
            tmp2/=10; dig++;
        }
        if(dig != len_max) return;
        
        if(tmp <= high && tmp >= low){
            ans.add(tmp);
        }
     }
    
    public List<Integer> sequentialDigits(int low, int high) {
        int dig_low = 0, dig_high = 0, tmp1 = low, tmp2 = high;
        
        while(tmp1 != 0){
            dig_low++;
            tmp1/=10;
        }
        
        while(tmp2 != 0){
            dig_high++;
            tmp2/=10;
        }
        
        for(int i=dig_low ; i<=dig_high ; i++){
            for(int j=1 ; j<=9 ; j++){
                check(i, j, low, high);
            }
        }
        
        return ans;
    }
}

/*
想法:
  先求出最小數的位數 然後 For 到 最大數的位數。

  每一個位數都用1~9當開頭，生成符合題目要求的數字。

  如果該數字在區間內就加入答案裡。

複雜度:

  O(1)。
  
*/
