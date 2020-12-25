// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3303/
var minPathSum = function(grid) {
    let i; 
    let j;
    let n = grid.length; 
    let m = grid[0].length
    for (i = 0; i < n; i++)
        for (j = 0; j < m; j++){
            if (i == 0 && j != 0)
                grid[i][j] = grid[i][j-1] + grid[i][j]
            else if (i != 0 && j == 0)
                grid[i][j] = grid[i-1][j] +  grid[i][j]
            else if (i != 0 && j != 0)
                grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
        }
    return grid[n-1][m-1]
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))