// https://leetcode.com/problems/min-cost-climbing-stairs/submissions/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = Array(cost.length + 1).fill(0)
    dp[0]=cost[0]
    dp[1]=cost[1]
    
    for (let i = 2; i <= cost.length; i++){
        dp[i] = Math.min(dp[i-1],dp[i-2])
        if (i != cost.length)
            dp[i] += cost[i]
    }
    console.log(dp)
    return dp[cost.length]
};