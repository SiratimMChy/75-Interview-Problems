var findDisappearedNumbers = function (nums) {
    let counts = {};
    let result = [];

    
    for (let number of nums) {
        counts[number] = true;
    }

    for (let number = 1; number <= nums.length; number++) {
        if (!(number in counts)) {
            result.push(number);
        }
    }

    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
