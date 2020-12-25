// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3312/


//Bài này khá căng thì công thức 
var maximalSquare = function(matrix) {
    let n = matrix.length;
    let m = n > 0 ? matrix[0].length : 0; 
    let dp = Array(n+1).fill(0).map(() => Array(m+1).fill(0))
    let edge = 0;
    for (let i = 1; i <= n; i++)
        for(let j = 1; j <= m; j++)
            {
                if(matrix[i-1][j-1] == '1'){
                    dp[i][j] = Math.min(Math.min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1]) + 1
                    edge = Math.max(dp[i][j], edge)
                }
            }
    return edge*edge
};