var twoSum = function (nums, target) {
    res = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                res.push(i, j);
                break;
            }
        }
    }
    return res;
};