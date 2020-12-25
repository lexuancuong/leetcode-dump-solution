https://leetcode.com/problems/container-with-most-water/
/*
 * @param {number[]} height
 * @return {number}
 */
let calArea = (height, left, right) =>{
    return Math.min(height[left],height[right]) * (right - left)
}
var maxArea = function(height) {
    let n = height.length 
    if (n == 0)
        return 0
    let left = 0
    let right = n - 1
    let maxArea = 0
    while(left < right){
        maxArea = Math.max(maxArea,calArea(height,left,right))
        if (height[left] < height[right])
            left++ 
        else 
            right--
    }
    return maxArea
};