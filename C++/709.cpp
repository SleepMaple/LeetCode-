class Solution {
public:
    string toLowerCase(string s) {
        int l = s.size();

        for (int i = 0 ; i < l ; i++) {
            if (s[i] - 'A' >= 0 && s[i] - 'Z' <= 0) {
                s[i] = s[i] - 'A' + 'a';
            }
        }

        return s;
    }
};

To check if it is a upper_case alphabet and change it to lower_case alphabet.
