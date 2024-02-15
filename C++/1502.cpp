class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        sort(arr.begin(), arr.end());

        int l = arr.size();

        for (int i = 2 ; i < l ; i++) {
            if (arr[i] - arr[i - 1] != arr[1] - arr[0]) {
                return false;
            }
        }

        return true;
    }
};
