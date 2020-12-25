// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3310/


// Đầy là một bài toán khá hay 
// Nếu chạy đến bước i, ta sẽ chạy với số bước từ giá trị i (đang xét) đến gía trị max của hiện tại 
// là giá max giữa max cũ với, max hiện tại cục bộ
// nếu thuật toán chạy về được đến điều kiện max >= nums length tức có thể về đến được đích

var canJump = function(nums) {
    let max = 0
    for(let i = 0; i <= max; i++)
    {
        max = Math.max(max, i + nums[i])
        if (max >= nums.length - 1) return true
    }
    return false
};
console.log(Math.min([1,2,3,4]))