class Solution {
public:
    bool judgeCircle(string moves) {
        int x = 0, y = 0, l = moves.size();

        for (int i = 0 ; i < l ; i++) {
            switch(moves[i]){
                case 'U':
                    y++;
                    break;
                case 'D':
                    y--;
                    break;
                case 'L':
                    x--;
                    break;
                case 'R':
                    x++;
                    break;
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

//simulate the move and check if the last position is at (0,0) or not
