// https://leetcode.com/problems/longest-substring-without-repeating-characters/k
/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length 
    if (n <= 1)
        return n
    
    let hash = {}
    let start = 0
    let maxLen = -1
    for(let i = 0; i < s.length; i++){
        // Nếu đã tồn tại hash[s[i]] trong mảng rồi
        // thì start sẽ được gán bằng giá trị lớn hơn của start hiện tại với giá trị của hash[s[i]] đó
        // hash s[] sẽ được gán bằng vị trí start hiện tại
        if(hash[s[i]] != undefined){
            start = Math.max(hash[s[i]], start)
            hash[s[i]] = start
        }

        // Chiều dài lớn nhất sẽ được gán bằng số phần từ từ start đến vị trí hiện tại
        maxLen = Math.max(maxLen, i - start + 1)
        
        // Cập nhật giá trị của biến hash[s[i]]
        hash[s[i]] = i + 1
    }
    return maxLen
};