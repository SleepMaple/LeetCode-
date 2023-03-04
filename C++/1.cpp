class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int find = 0, ans1, ans2;
        vector<int> ans;

        for (int i = 0; i < nums.size() && (!find); i++)
        {
            for (int j = i + 1; j < nums.size() && (!find); j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    ans.push_back(i);
                    ans.push_back(j);
                }
            }
        }

        return ans;
    }
};

/*
想法:
    暴力枚舉，O(nlogn)可以寫MAP。

複雜度:
    O(n^2)。 
*/
