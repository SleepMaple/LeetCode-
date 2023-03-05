class Solution {
    List<Integer> ans = new ArrayList<Integer>();
    
    void travel(TreeNode root){
        if(root == null) return;
        else{
            ans.add(root.val);
            travel(root.left);
            travel(root.right);
        }
    }
    
    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        travel(root1);
        travel(root2);
        
        int l = ans.size();
        Collections.sort(ans);
        
        return ans;  
    }
}

/*
想法:
  先走訪再排序。
  
複雜度:
  O(nlogn)。
*/
