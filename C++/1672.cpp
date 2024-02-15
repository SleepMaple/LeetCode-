class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int l = accounts.size(), ans = -1;

        for (int i = 0 ; i < l ; i++) {
            int l2 = accounts[i].size(), sum = 0;

            for (int j = 0 ; j < l2 ; j++) {
                sum += accounts[i][j];
            }

            ans = max(ans, sum);
        }

        return ans;
    }
};

//add the numbers and check if the max_num or not
