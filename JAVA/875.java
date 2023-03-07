class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int low = 1, high = 1000000000, mid = 0;
        while (low <= high) {
            mid=(low+high)/2;
            int tmp = 0;
            for(int i=0 ; i<piles.length ; i++){
                tmp+=Math.ceil(1.0 * piles[i] / mid);
            }
            
            if(tmp>h){
                low=mid+1;
            }
            else{ 
                high=mid-1;
            }
        }
        
        return low;
    }
}

/*
想法:
  二分搜。
  
複雜度:
  O(logn)。
*/
