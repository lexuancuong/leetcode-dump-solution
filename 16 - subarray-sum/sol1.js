// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3307/
let subarraySum = (nums, k) => {
    if (nums.length == 0)
        return 0;

    //Khai báo các biến sẽ được sử dụng
    let count = 0;
    let sum = 0;
    let i;
    let n = nums.length
    let hash = new Map();
    hash.set(0,1)
    //Bắt đầu vòng lặp
    for(i = 0; i < n; i++){
        sum += nums[i]; 
        if (hash.has(sum - k))
            count += hash.get(sum - k)
        if (hash.has(sum))
            hash.set(sum, hash.get(sum) + 1);
        else
            hash.set(sum,1);
    }
    return count
};
console.log(subarraySum([1,1,1],2))