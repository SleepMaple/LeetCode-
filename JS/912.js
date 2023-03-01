/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    function mergeSort (arr, l, r) {
        if (l < r) {
            let mid = Math.floor((l + r) / 2);
            mergeSort(arr, l, mid);
            mergeSort(arr, mid + 1, r);
            
            merge(arr, l, mid, r);
        }
    }

    function merge (arr, l, mid, r) {
        let arr1 = [], arr2 = [], n1 = 0, n2 = 0, n3 = l;
        console.log(l, mid, r);

        for (let i = l; i <= mid; i++) {
            arr1.push(arr[i]);
        }

        for (let i = mid + 1; i <= r; i++) {
            arr2.push(arr[i]);
        }

        while (n1 < arr1.length && n2 < arr2.length) {
            if (arr1[n1] < arr2[n2]) {
                arr[n3++] = arr1[n1++];
            }
            else {
                arr[n3++] = arr2[n2++];
            }
        }

        while (n1 < arr1.length) {
            arr[n3++] = arr1[n1++];
        }

        while (n2 < arr2.length) {
            arr[n3++] = arr2[n2++];
        }
    }

    mergeSort(nums, 0, nums.length - 1);
    
    return nums;
};

/*
題意:寫個nlogn排序(merge, quick, heap)。
想法:merge sort。
複雜度:O(nlogn)。
*/
