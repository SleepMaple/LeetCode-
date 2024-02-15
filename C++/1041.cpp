class Solution {
public:
    void walk (char dir, int &x, int &y) {
        switch (dir) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }
    }

    void turn_L (char &dir) {
        switch (dir) {
            case 'N':
                dir = 'W';
                break;
            case 'S':
                dir = 'E';
                break;
            case 'E':
                dir = 'N';
                break;
            case 'W':
                dir = 'S';
                break;
        }
    }

    void turn_R (char &dir) {
        switch (dir) {
            case 'N':
                dir = 'E';
                break;
            case 'S':
                dir = 'W';
                break;
            case 'E':
                dir = 'S';
                break;
            case 'W':
                dir = 'N';
                break;
        }
    }

    bool isRobotBounded(string instructions) {
        int l = instructions.size(), x = 0, y = 0;
        char dir = 'N';

        for (int i = 0 ; i < 4 ; i++) {
            for (int j = 0 ; j < l ; j++) {
                switch (instructions[j]) {
                    case 'G':
                        walk(dir, x, y);
                        break;
                    case 'L':
                        turn_L(dir);
                        break;
                    case 'R':
                        turn_R(dir);
                        break;
                }
            }
        }

        if (x == 0 && y == 0) {
            return true;
        }
        else {
            return false;
        }
    }
};

//simulation for four times
