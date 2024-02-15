class Solution {
public:
    double average(vector<int>& salary) {
        int sum = 0, max_s = -1, min_s = 2147483647;

        for (int i = 0 ; i < salary.size() ; i++) {
            max_s = max(max_s, salary[i]);
            min_s = min(min_s, salary[i]);
            sum += salary[i];
        }

        sum -= max_s;
        sum -= min_s;
        return (double)sum/(salary.size() - 2);
    }
};

//record the max_salary and min_salary and sum the total salary
//total salary minus the max and min and then average the number of people.
