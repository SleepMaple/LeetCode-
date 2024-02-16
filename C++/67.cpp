class Solution {
public:
    string addBinary(string a, string b) {
        int l1 = a.size(), l2 = b.size(), carry = 0;
        string c;

        if (l2 > l1) {
            c = a;
            a = b;
            b = c;
        }

        l1 = a.size();
        l2 = b.size();
        reverse(a.begin(), a.end());
        reverse(b.begin(), b.end());

        for (int i = 0 ; i < l1 ; i++) {
            if (i >= l2) {
                if (a[i] == '1') {
                    if (carry == 1) {
                        a[i] = '0';
                        carry = 1;
                    }
                    else {
                        a[i] = '1';
                        carry = 0;
                    }
                }
                else {
                    if (carry == 1) {
                        a[i] = '1';
                        carry = 0;
                    }
                    else {
                        a[i] = '0';
                        carry = 0;
                    }
                }
            }
            else {
                cout << a[i] << " " << b[i] << endl;

                if (a[i] == '1') {
                    if (b[i] == '1') {
                        if (carry == 1) {
                            a[i] = '1';
                            carry = 1;
                        }
                        else {
                            a[i] = '0';
                            carry = 1;
                        }
                    }
                    else {
                        if (carry == 1) {
                            a[i] = '0';
                            carry = 1;
                        }
                        else {
                            a[i] = '1';
                            carry = 0;
                        }
                    }
                }
                else {
                    if (b[i] == '1') {
                        if (carry == 1) {
                            a[i] = '0';
                            carry = 1;
                        }
                        else {
                            a[i] = '1';
                            carry = 0;
                        }
                    }
                    else {
                        if (carry == 1) {
                            a[i] = '1';
                            carry = 0;
                        }
                        else {
                            a[i] = '0';
                            carry = 0;
                        }
                    }
                }
            }
        }

        reverse(a.begin(), a.end());

        if (carry == 1) {
            a.insert(0, "1");
        }

        return a;
    }
};

//add simulation by string
