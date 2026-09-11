var intersect = function(nums1, nums2) {
    let result = [];

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } 
        else if (nums1[i] < nums2[j]) {
            i++;
        } 
        else {
            j++;
        }
    }

    return result;
};

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];

console.log(intersect(nums1,nums2));