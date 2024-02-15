class Solution {
public:
    int arraySign(vector<int>& nums) {
        int l = nums.size(), ans = 1;

        for (int i = 0 ; i < l ; i++) {
            if (nums[i] == 0) {
                return 0;
            }
            else {
                if (nums[i] >= 1) {
                    ans *= 1;
                }
                else {
                    ans *= -1;
                }
            }
        }

        if (ans >= 1) {
            return 1;
        }
        else{
            return -1;
        }
    }
};

//No need to mutiple, just record the plus and minus number.
