/*
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let s = 0
    for (let i = 0; i < nums.length; i++)
        s += nums[i]
    if (s % 2 == 1)
        return false; 
    
    let t = Math.floor(s/2)
    
    let dp = Array(t+1).fill(0)
    
    dp[0] = 1
    
    for (let i= 0; i < nums.length; i++){
        console.log(dp)
        for(let j = t; j >= nums[i]; j--)
            dp[j] = dp[j - nums[i]] == 1 ? 1 : dp[j]
    }
    return dp[t]
                                  
    
};