class Solution {
public:
    bool check (int **table) {
        for (int i = 0 ; i < 3 ; i++) {
            for (int j = 0 ; j < 3 ; j++) {
                if (table[i][j] == 0) {
                    return false;
                }
            }
        }

        return true;
    }

    int winlose (int **table) {
        if (table[0][0] == table[1][1] && table[1][1] == table[2][2]) {
            return table[1][1];
        }
        if (table[1][0] == table[1][1] && table[1][1] == table[1][2]) {
            return table[1][1];
        }
        if (table[2][0] == table[1][1] && table[1][1] == table[0][2]) {
            return table[1][1];
        }
        if (table[0][1] == table[1][1] && table[1][1] == table[2][1]) {
            return table[1][1];
        }
        if (table[0][0] == table[0][1] && table[0][1] == table[0][2]) {
            return table[0][1];
        }
        if (table[0][0] == table[1][0] && table[1][0] == table[2][0]) {
            return table[1][0];
        }
        if (table[2][0] == table[2][1] && table[2][1] == table[2][2]) {
            return table[2][1];
        }
        if (table[0][2] == table[1][2] && table[1][2] == table[2][2]) {
            return table[1][2];
        }


        return 0;
    }

    string tictactoe(vector<vector<int>>& moves) {
        int **table = new int *[3];
        for (int i = 0 ; i < 3 ; i++) {
            table[i] = new int[3];
        }

        for (int i = 0 ; i < 3 ; i++) {
            for (int j = 0 ; j < 3 ; j++) {
                table[i][j] = 0;
            }
        }

        int l = moves.size(), who = 1;
        for (int i = 0 ; i < l ; i++){
            if (who == 1) {
                table[moves[i][0]][moves[i][1]] = 1;
                who = -1;
            }
            else {
                table[moves[i][0]][moves[i][1]] = -1;
                who = 1;
            }
        }

        int winner = winlose(table);

        if (winner == 0) {
            bool full = check(table);

            if (full == true){
                return "Draw";
            }
            else {
                return "Pending";
            }
        }
        else if (winner == 1) {
            return "A";
        }
        else {
            return "B";
        }
    }
};

//simulation and brute
