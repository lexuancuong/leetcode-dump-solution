/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    let check = Array(matrix.length).fill(false).map(() => Array(matrix[0].length).fill(false))
    let n = matrix.length
    if (n == 0)
        return []
    let m = matrix[0].length
    let dr = [0, 1, 0,-1]
    let dc = [1, 0, -1, 0]
    let i = 0
    let j = 0
    let tr = dr[0]
    let tc = dc[0]
    let run = 0
    while (res.length < n*m){
        res.push(matrix[i][j])
        check[i][j] = true
        if (!(i + tr < n && j + tc < m && i + tr >= 0 && j + tc >= 0 && !check[i+tr][j+tc])){
            run++;
            tc = dc[run % 4]
            tr = dr[run % 4]
        }
        i += tr
        j += tc
    }
     return res
 };