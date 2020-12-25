var numIslands = function(grid) {
    let i;
    let j;
    let count = 0;
    for (i = 0; i < grid.length; i++){
        for (j = 0; j < grid[0].length; j++){
            if (grid[i][j] == '1'){
                dfs(grid,i,j)
                count += 1
            }
        }
    }
    return count
};
let dfs = (grid, x, y) =>{
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] == '1'){
        grid[x][y] = '#'
        dfs(grid, x , y + 1)
        dfs(grid, x , y  - 1)
        dfs(grid, x + 1, y)
        dfs(grid, x - 1, y)
    }
}

let a = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
console.log(numIslands(a))