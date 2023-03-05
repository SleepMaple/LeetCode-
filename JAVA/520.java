class Solution {
    public boolean detectCapitalUse(String word) {
        if(word.charAt(0) - 'A' >= 0 && word.charAt(0) - 'Z' <= 0){    
            int big=1, small=0;
            
            for(int i=1 ; i<word.length() ; i++){
                if(word.charAt(i) - 'a' >= 0 && word.charAt(i) - 'z' <= 0){
                    small++;
                }
                if(word.charAt(i) - 'A' >= 0 && word.charAt(i) - 'Z' <= 0){
                    big++;
                }
            }
    
            if(big == 1 || big == word.length()) return true;
            return false;
        }
        else{
            boolean small = true;
            
            for(int i=1 ; i<word.length() ; i++){
                if(word.charAt(i) - 'A' >= 0 && word.charAt(i) - 'Z' <= 0){
                    small = false;
                    break;
                }
            }
            
            return small;
        }
    }
}

/*
想法:
  語法題，按照題意敘述完成。
  
複雜度:
  O(n)。

*/
