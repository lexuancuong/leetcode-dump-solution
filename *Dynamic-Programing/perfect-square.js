// https://leetcode.com/problems/perfect-squares/

var numSquares = function(n) {
    
    let dp = Array(n+1).fill(Number.MAX_VALUE)
    dp[0] = 0
    
    for (let i = 1; i <= n; i++){
        let j = 1;
        while (j*j <= i){
            dp[i] = Math.min(dp[i], dp[Math.max(0,i - j*j)] + 1)
            j++;
        }
    }
    return dp[n]
};