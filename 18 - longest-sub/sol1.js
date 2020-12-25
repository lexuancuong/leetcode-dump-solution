// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3311/

// Xét thấy rằng: Độ dài dãy con chung dài nhất của 2 chuối con (i phần tử đầu và j phần tử đầu)
// được kí hiệu là L[i][j]
// Xét nếu i = 0 hoặc j = 0 (0 phần tử đầu thì L[i][j] = 0)
// Nếu text[i] == text[j] thì L[i][j] = L[i-1][j-1] + 1
// Hoặc tổng của nó với i-1 phần tử đầu trong dãy text1 hoặc j-1 phần tử đầu trong dãy text2
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let L = Array(n+1).fill(0).map(()=> Array(m+1).fill(0))
    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= m; j++){
            if (text1[i-1] == text2[j-1])
                L[i][j] = L[i-1][j-1] + 1
            else 
                L[i][j] = Math.max(L[i-1][j],L[i][j-1])
        }
    return L[n][m]
}
let text2 = "aaa"
let text1 = "bbbb"
longestCommonSubsequence(text1, text2)