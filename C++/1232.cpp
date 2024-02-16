class Solution {
public:
    bool checkStraightLine(vector<vector<int>>& coordinates) {
        int line = 0;
        double n;

        if ((coordinates[1][1] - coordinates[0][1]) == 0) {
            line = 1;
        }
        else {
            n = (double)(coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1]);
        }

        for (int i = 2 ; i < coordinates.size() ; i++) {
            if (coordinates[i][1] - coordinates[i - 1][1] == 0) {
                if (line == 1) {
                    continue;
                }
                else {
                    return false;
                }
            }
            else {
                if ((double)(coordinates[i][0] - coordinates[i - 1][0]) / (coordinates[i][1] - coordinates[i - 1][1]) != n) {
                    return false;
                }
            }
        }

        return true;
    }
};

//mathematics => check the straight line in the 2D plane.
//any two nodes in the line must satisfy this rule: the value of (x2-x1) / (y2-y1) must be the same.
