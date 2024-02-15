class Solution {
public:
    int romanToInt(string s) {
        int num[7] = {1, 5, 10, 50, 100, 500, 1000}, str[7] = {'I', 'V', 'X', 'L', 'C', 'D', 'M'}, l = s.size(), sum = 0;

        for (int i = 0 ; i < l ; i++) {
            if (s[i] == 'I' && i != l - 1 && s[i + 1] == 'V') {
                sum += 4; 
                i++; 
                continue;
            }
            else if (s[i] == 'I' && i != l - 1 && s[i + 1] == 'X') {
                sum += 9; 
                i++; 
                continue;
            }
            else if (s[i] == 'X' && i != l - 1 && s[i + 1] == 'L') {
                sum += 40; 
                i++; 
                continue;
            }
            else if (s[i] == 'X' && i != l - 1 && s[i + 1] == 'C') {
                sum += 90; 
                i++; 
                continue;
            }
            else if (s[i] == 'C' && i != l - 1 && s[i + 1] == 'D') {
                sum += 400; 
                i++; 
                continue;
            }
            else if (s[i] == 'C' && i != l - 1 && s[i + 1] == 'M') {
                sum += 900; 
                i++; 
                continue;
            }

            for (int j = 0 ; j < 7 ; j++) {
                if (s[i] == str[j]) {
                    sum += num[j];
                }
            }
        }

        return sum;
    }
};


//roman to integer
//need to be aware of the exception
