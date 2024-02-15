class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int x = 0, rx = 1, y = 0, dy = 1, xy = 1, cnt = 0, r = matrix.size() - 1, c = matrix[0].size(), total = r * c;
        vector<int> v;

        for (int i = 0 ; i < c ; i++) {
            v.push_back(matrix[y][x++]);
        }
        x--;
        c--;
        rx = 0;
        xy = 0;

        while(cnt < total) {
            //cout << cnt << " " << x << " " << y << endl;

            if (xy == 1) {
                if (rx == 1) {
                    for (int i = 0 ; i < c ; i++) {
                        v.push_back(matrix[y][++x]);
                        cnt++;
                    }
                    c--;
                    rx = 0;
                }
                else {
                    for (int i = 0 ; i < c ; i++) {
                        v.push_back(matrix[y][--x]);
                        cnt++;
                    }
                    c--;
                    rx = 1;
                }
                xy = 0;
            }
            else {
                if (dy == 1) {
                    for (int i = 0 ; i < r ; i++) {
                        v.push_back(matrix[++y][x]);
                        cnt++;
                    }
                    r--;
                    dy = 0;
                }
                else {
                    for (int i = 0 ; i < r ; i++) {
                        v.push_back(matrix[--y][x]);
                        cnt++;
                    }
                    r--;
                    dy = 1;
                }
                xy = 1;
            }
        }

        return v;
    }
};

//define two variable to change the direction(one for x and one for y).
//simulation the movement.
