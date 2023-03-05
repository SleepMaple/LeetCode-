class Solution {
    int where, now=0;
    
    boolean check(int[] gas, int[] cost){
        int sum = 0;
        
        for(int i=where ; i<gas.length ; i++){
            sum += (gas[i] - cost[i]);
            if(sum < 0){
                where=i;
                return false;
            }
        }
        
        //System.out.printf("\nSum : %d, Now : %d\n", sum, now);
        if(sum + now >= 0) return true;
        return false;
    }
    
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int ans = -1;
        
        for(int i=0 ; i<gas.length ; i++){
            if(gas[i] - cost[i] >= 0){
                where=i;
                if(check(gas, cost) == true){
                    ans = i;
                    break;
                }    
                
                for(int j=i ; j<where ; j++){
                    //System.out.printf("%d ", j);
                    now += (gas[j] - cost[j]);
                }
                i=where;
            }
            
            //System.out.printf("%d ", i);
            now += (gas[i] - cost[i]);
        }
        
        return ans == -1 ? -1 : ans;
    }
}

/*
想法:
  走，一直走。

複雜度:
  O(n)。

*/
