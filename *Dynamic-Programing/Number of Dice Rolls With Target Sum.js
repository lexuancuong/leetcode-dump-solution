https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
var numRollsToTarget = function(d, f, target) {
    let dp = Array(d+1).fill(0).map(() => Array(target+1).fill(0))
    dp[0][0] = 1
    for(let i = 1;i <= d; i++ ){
        for (let j = 1; j <= target; j++){
            dp[i][j] = dp[i][j-1] + dp[i-1][j-1]
            if (j - f - 1 >= 0) 
                dp[i][j] -= dp[i-1][j - f - 1]
        }
    }
    return dp[d][target] % mod
};