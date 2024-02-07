class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int l = digits.size(), carry = 0;

        digits[l - 1]++;
        for (int i = l - 1 ; i >= 0 ; i--) {
            digits[i] = digits[i] + carry;
            if (digits[i] >= 10) {
                digits[i] -= 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
        }

        if (carry == 1) {
            digits.insert(digits.begin(), 1);
        }

        return digits;
    }
};

//simulation of add
