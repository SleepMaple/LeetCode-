class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        int ans = 0;

        sort(nums.begin(), nums.end());

        for (int i = nums.size() - 1 ; i >= 2 ; i--) {
            if (nums[i - 1] + nums[i - 2] > nums[i]) {
                ans = nums[i] + nums[i - 1] + nums[i - 2];
                break;
            }
        }

        return ans;
    }
};

//mathematics => three sides of the triangle satisfy this rule : a - b < x < a + b
//sort => find the three sides
