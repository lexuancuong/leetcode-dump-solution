let productExceptSelf = nums => {
    let n = nums.length
    let result = Array(n)
    result[0] = 1;
    let i;
    for (i = 1; i < nums.length; i++){
        result[i] = nums[i-1] * result[i-1];
    }
    let R = 1;
    for (i = nums.length - 1; i >= 0; i--){
        result[i] = result[i] * R;
        R *= nums[i]
    }
    return result;
};
console.log(productExceptSelf([24,12,8,6]))