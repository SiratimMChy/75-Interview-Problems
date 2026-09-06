var majorityElement = function(nums) {
    let counts = {}; 
    let majorityCount = nums.length / 2;

    for (let num of nums) {

        if (num in counts) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }

        if (counts[num] > majorityCount) {
            return num; 
        }
    }

    return -1;
};

console.log(majorityElement([[1, 1, 2, 2]]));