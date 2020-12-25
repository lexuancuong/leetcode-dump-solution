let lower = (nums,low,high,x) => {
    let res = -1
    let mid
    while(low <= high){
        mid = Math.floor((low + high)/2)
        if (nums[mid] >= x){
            if (nums[mid] == x) res = mid;
            high = mid - 1;
        }
        else low = mid + 1
    }
    return res
}
var minSubArrayLen = function(s, nums) {
    let n = nums.length
    if (n == 0)
        return 0;
    let preSum = Array(n).fill(0) 
    preSum[0] = nums[0]
    for (let i = 1; i < n; i++){
        preSum[i] = preSum[i-1] + nums[i]    
    }
    let res = 0
    for (let i = 0; i < n; i++){
        let pos = lower(preSum,i, n - 1, preSum[i] + s - nums[i])
        if(pos != -1){
           res = Math.max(res, pos - i + 1) 
        }
    }
    return res;
}
console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
