class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        int l = nums.size(), before = 0;

        if (l == 1) {
            return true;
        }

        if (nums[1] - nums[0] > 0) {
            before = 1;
        }
        else if (nums[1] - nums[0] < 0) {
            before = -1;
        }
        else {
            before = 0;
        }

        for (int i = 2 ; i < l ; i++) {
            if (nums[i] - nums[i - 1] > 0) {
                if (before == -1) {
                    return false;
                }
                else {
                    if (before == 0) {
                        before = 1; 
                    }
                }
            }
            else if (nums[i] - nums[i - 1] < 0) {
                if (before == 1) {
                    return false;
                }
                else {
                    if (before == 0) {
                        before = -1;
                    }
                }
            }
        }

        return true;
    }
};

//check the monotonic is increasing or decreasing.
//the point is variable can be change only one time.
