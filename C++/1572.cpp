class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int r = mat.size(), sum = 0;
        
        for (int i = 0 ; i < r ; i++) {
            sum += mat[i][i];
            sum += mat[i][r - i - 1];
        }

        if (r % 2 == 1) {
            sum -= mat[r/2][r/2];
        }

        return sum;
    }
};

//Math
