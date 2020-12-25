/*
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor == 0)
        return
    let sign = ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) ? -1 : 1
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let res = Math.floor(Math.exp(Math.log(dividend) - Math.log(divisor)))
    if (sign == 1)
        return Math.min(res, 2**31 -1 )
    return Math.max(-res, - (2**31))
};