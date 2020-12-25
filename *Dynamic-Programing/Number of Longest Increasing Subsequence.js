/*
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let n = nums.length
    if (n == 0)
        return 0
    
    let lengths = Array(n).fill(0)
    let counts = Array(n).fill(1)
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++)
            if(nums[j] < nums[i]){
                if (lengths[j] >= lengths[i]){
                    lengths[i] = lengths[j] + 1 
                    counts[i] = counts[j]
                }
                //Nếu có tồn tại một dãy con trước lengths
                //Thì cộng thêm vào counts[i] giá trị của counts[j]
                //Là độ dài dãy con ở đó
                else if (lengths[j] + 1 == lengths[i] ){
                    counts[i] += counts[j]
                }
            }
    }
    let max = lengths[0]
    for(let i = 0; i < n; i++){
        if (max < lengths[i])
            max = lengths[i]
    }
    let ans = 0
    for(let i = 0; i < n; i++){
        if (lengths[i] == max)
            ans += counts[i]
    }
    
    return ans
};