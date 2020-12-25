https://leetcode.com/problems/word-search/
/*
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let d = [[0,1],[0,-1],[1,0],[-1,0]]    
    let n = board.length
    if (n == 0) return false
    let m = board[0].length
    
    let dfs = (index,x,y) =>{
        if (index == word.length)
            return true
        if (x < 0 || y < 0 || x >= n || y >= m)
            return false
        if (board[x][y] != word[index])
            return false
        let tmp = board[x][y]
        board[x][y] = '#'
        for(let i = 0; i < 4; i++)
            if(dfs(index + 1,x + d[i][0], y + d[i][1])) 
                return true
        board[x][y] = tmp        
        return false
    }
    
    for (let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(dfs(0,i,j))
                return true
        }
    }

    return false
};