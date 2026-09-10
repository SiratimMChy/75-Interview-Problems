var firstUniqChar = function (s) {
    let counts = {};

    for (let char of s) {
        if (char in counts) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (counts[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};
