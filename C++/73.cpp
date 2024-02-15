class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int r = matrix.size(), c = matrix[0].size();
        vector<int> x0, y0;

        for (int i = 0 ; i < r ; i++) {
            for (int j = 0 ; j < c ; j++) {
                if (matrix[i][j] == 0) {
                    x0.push_back(j);
                    y0.push_back(i);
                }
            }
        }

        for (int i = 0 ; i < x0.size() ; i++) {
            for (int j = 0 ; j < c ; j++) {
                matrix[y0[i]][j] = 0;
            }

            for (int j = 0 ; j < r ; j++) {
                matrix[j][x0[i]] = 0;
            }
        }

        /*for (int i = 0 ; i < r ; i++) {
            for (int j = 0 ; j < c ; j++) {
                cout << matrix[i][j] << " ";
            }
            cout << endl;
        }*/
    }
};

//Time Complexity: O(r * c)
