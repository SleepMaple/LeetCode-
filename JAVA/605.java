class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int l=flowerbed.length, cnt=0;
        
        for(int i=0 ; i<l ; i++){
            int i1 = (i-1 < 0 ? 0 : flowerbed[i-1]);
            int i2 = flowerbed[i]; 
            int i3 = (i+1 >= l ? 0 : flowerbed[i+1]);
            
            //System.out.printf("%d : %d %d %d\n", i, i1, i2, i3);
            if(i1 == 0 && i2 == 0 && i3 == 0){
                flowerbed[i]=1;
                cnt++;
            }
        }
        
        return cnt >= n ? true : false;
    }
}

/*
想法:
  根據題意完成即可。
  
複雜度:
  O(n)。
*/
