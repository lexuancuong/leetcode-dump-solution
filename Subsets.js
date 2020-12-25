https://leetcode.com/problems/subsets/
/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let backtrack = (start, cur) => {
        output.push(Array.from(cur))
        while(start < nums.length){
            cur.push(nums[start])
            backtrack(start + 1, cur)
            cur.pop()
            start++
        }
    }
    let output = []
    let n = nums.length
    if (n == 0) return []
    let cur = []
    backtrack(0,cur)
    return output 
};