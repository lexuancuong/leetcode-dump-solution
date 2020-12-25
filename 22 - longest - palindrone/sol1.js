/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode.com/problems/longest-palindromic-substring/submissions/
 var longestPalindrome = function(s) {
    if (s.length <= 0)
        return ""
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++){
        let l1 = expandAroundCenter(s,i,i)
        let l2 = expandAroundCenter(s,i,i+1)
        let l = Math.max(l1,l2)
        if (l > end - start){
            start = i - Math.floor((l - 1)/2)
            end = i + Math.floor(l/2)
        }
    }
    return s.substring(start,end+1)
};
let expandAroundCenter = (nums,left,right) =>{
    while (left >= 0 && right < nums.length && nums[left] == nums[right]){
        left--;
        right++;
    }
    return right - left - 1
}