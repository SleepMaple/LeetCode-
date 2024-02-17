class Solution {
public:
    string multiply(string num1, string num2) {
        if (num1 == "0" || num2 == "0") {
            return "0";
        }
        else {
            vector<int> ans(num1.size() + num2.size(), 0);
            string ans_str = "";

            for (int i = num1.size() - 1 ; i >= 0 ; i--) {
                for (int j = num2.size() - 1 ; j >= 0 ; j--) {
                    ans[i + j + 1] += (num1[i] - '0') * (num2[j] - '0');
                    ans[i + j] += ans[i + j + 1] / 10;
                    ans[i + j + 1] %= 10;
                }
            }

            int i = 0;
            while (ans[i] == 0) {
                i++;
            }
            for ( ; i < ans.size() ; i++) {
                ans_str += to_string(ans[i]);
            }

            return ans_str;
        }
    }
};

//simulate the mutiply
//the point is dealing with the result of the multiplication, digit and the carry
