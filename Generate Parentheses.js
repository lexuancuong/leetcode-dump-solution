/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = []
    let backtrack = (S, left,right) =>{
        if(S.length == 2*n)
            ans.push(S)
        else{
            if (left < n )
                backtrack(S + '(', left+1, right)
            if (right < left)
                backtrack(S + ')', left, right + 1)
        }
    }
    backtrack("",0,0)
    return ans
};