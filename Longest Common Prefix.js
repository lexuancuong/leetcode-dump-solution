// https://leetcode.com/problems/longest-common-prefix/
/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0)
        return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++){
        let count = 0
        while (count < prefix.length){
            if (prefix[count] != strs[i][count]){
                prefix = prefix.substring(0, count)
                if(prefix.length == 0)
                    return ""
            }
            count++;
        }
    }
    return prefix
};