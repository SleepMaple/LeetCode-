class Solution {
public:

    int StringToInt(string in) {
        int l = in.size(), minus = (in[0] == '-' ? 1 : 0), num = 0, i = (in[0] == '-' ? 1 : 0);

        for (; i < l ; i++) {
            num *= 10;
            num = num + (in[i] -'0');
        }

        if (minus == 1) {
            return num * -1;
        }
        else {
            return num;
        }
    }

    int calPoints(vector<string>& operations) {
        int l = operations.size(), arr[1010] = {0}, p = 0, sum = 0;

        for (int i = 0 ; i < l ; i++) {
            if (operations[i][0] != 'C' && operations[i][0] != 'D' && operations[i][0] != '+') {
                arr[p++] = StringToInt(operations[i]);
            }
            else if (operations[i][0] == 'C') {
                p--;
            }
            else if (operations[i][0] == 'D') {
                arr[p++] = arr[p - 1] * 2;
            }
            else {
                arr[p++] = arr[p - 1] + arr[p - 2];
            }
        }

        for (int i = 0 ; i < p ; i++) {
            //cout << arr[i] << endl;
            sum = sum + arr[i];
        }

        return sum;
    }
};

//Simulate the array behavior
