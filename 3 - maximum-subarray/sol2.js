// Dùng một biến tổng để lưu trữ! Một biến chạy cục bộ, so sánh trên các dãy con tăng của mảng
// Một biến để lưu giá trị cuối cùng
// Nếu tổng bé hơn 0 thì tổng sẽ được reset bằng 0! Vì giá trị của tổng chuỗi con liên tiếp của các số âm là số âm lớn nhất
var maxSubArray = function(nums) {
    let prefixSum = [];
    prefixSum[0] = nums[0]; 
    let i;
    let n = nums.length;
    let max_tmp = 0;
    let max_total = Number.NEGATIVE_INFINITY;
    for (i = 0 ; i < n; i++){
        max_tmp = max_tmp + nums[i]; 
        if (max_tmp > max_total)
            max_total = max_tmp;
        if (max_tmp < 0){
            max_tmp = 0;
        }
    }
    return max_total;
        
};
console.log(maxSubArray([-8, -5, -4, -8, -1]));