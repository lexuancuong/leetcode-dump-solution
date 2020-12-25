// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3301/
var checkValidString = function(s) {
    let len = s.length
    if (len == 0)
        return true;
    let stack_paren= [];
    let stack_star = [];
    let i; 
    for (i = 0; i < len; i++){
        if (s[i] == '*'){
            stack_star.push(i)
        }
        else if (s[i] == '('){
            stack_paren.push(i)
        }
        else{
            if (stack_paren.length == 0 && stack_star.length == 0){
                return false;
            }
            if(stack_paren.length != 0)
                stack_paren.pop();
            else{
                stack_star.pop();
            }
        }
    }
    //Kiểm tra nếu sau vòng lặp, vấn còn dấu ngoặc chưa đóng
    while (stack_paren.length != 0 && stack_star.length != 0){
        if (stack_paren.pop() > stack_star.pop())
            return false; 
    }
    return stack_paren.length == 0;
};


