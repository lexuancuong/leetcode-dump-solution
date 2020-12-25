//Dùng prefixsum
// nếu như phần tử prefixSum thứ [i] trừ đi phần tử prefixSum min nằm trong khoảng từ 
//đầu đến nó là lớn hơn giá trị max thì giá trị đó là giá trị max tạm thời
// Duyệt giá trị đó đến hết mảng để tìm được giá trị nhỏ nhất
var maxSubArray = function(nums) {
    let prefixSum = [];
    prefixSum[0] = nums[0]; 
    let i;
    let n = nums.length;
    for (i = 1 ; i < n; i++){
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }
    let min = 0;
    max = Number.NEGATIVE_INFINITY;
    for (i = 0; i < n;i++){
        max  = Math.max(max,prefixSum[i] - min);
        min = Math.min(min, prefixSum[i])
    }
    return max;
};
console.log(maxSubArray([4, -8, 9, -4, 1, -8, -1, 6]));