/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = String(x);
    flag = true;

    for (var i = 0; i < Math.floor(x.length / 2); i++) {
        if (x[i] !== x[x.length - i - 1]) {
            flag = false;
            break;
        }
    }
    return flag;
};