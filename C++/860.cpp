class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int l = bills.size(), box_5 = 0, box_10 = 0;

        for (int i = 0 ; i < l ; i++) {
            if (bills[i] == 5) {
                box_5++;
            }
            else if (bills[i] == 10) {
                if (box_5 == 0) {
                    return false;
                }
                else {
                    box_5--;
                    box_10++;
                }
            }
            else {
                if (box_10 >= 1 && box_5 >= 1) {
                    box_10--;
                    box_5--;
                }
                else if (box_5 >= 3) {
                    box_5 -= 3;
                }
                else {
                    return false;
                }
            }
        }

        return true;
    }
};

//simulate the change.
//the point is if customer pay for 20 dollar and i will use ten dollar first if i have one.
//the second priority is using three five dollars for change.
//because ten dollar is only use for 20 dollar and five dollar can use for ten or twenty dollar.
