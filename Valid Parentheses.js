// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3301/
var checkValidString = function(s) {
    let low = 0;
    let high = 0;
    let i; 
    for(i = 0; i < s.length; i++ ){
        low += s[i] == '(' ? 1 : -1  
        high += s[i] != ')' ? 1 : -1
        if(high < 0) break;
        low = Math.max(low, 0)
    }
    return low == 0;
};

// Low là biến để kiềm tra (Hiệu của số ngoặc mở so với số ngoặc đóng và sao )
// High là biến để chỉ (Hiệu của số ngoặc đóng so với số ngoặc mở và sao)

