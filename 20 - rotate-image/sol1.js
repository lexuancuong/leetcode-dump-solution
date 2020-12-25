// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/770/

// transpose
// flip horziral
var rotate = function(matrix) {
    let n = matrix.length
    if (n == 0) return
    for (let i = 0; i < n; i++)
        {
            for (let j = i; j < n; j++)
                {
                    if (i != j){
                        let tmp = matrix[i][j]
                        matrix[i][j] = matrix[j][i]
                        matrix[j][i] = tmp
                    }
                }
        }
    for (let i = 0; i < n; i++)
    {
        for (let j = 0 ;j < n/2; j++)
            {
                let tmp = matrix[i][j]
                matrix[i][j] = matrix[i][n-1-j]
                matrix[i][n-1-j] = tmp
            }
    }
};