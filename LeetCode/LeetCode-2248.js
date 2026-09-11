var intersection = function (nums) {
    let counts = {};
    let result = [];

    for (let array of nums) {
        for (let number of array) {
            if (number in counts) {
                counts[number]++;
            } else {
                counts[number] = 1;
            }
        }
    }

    for (let number in counts) {
        if (counts[number] === nums.length) {
            result.push(Number(number));
        }
    }

    return result.sort((a, b) => a - b);
};

console.log(intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [2, 3, 4, 5]
]));
