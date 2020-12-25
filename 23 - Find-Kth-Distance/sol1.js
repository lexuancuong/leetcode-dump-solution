// https://leetcode.com/explore/learn/card/binary-search/146/more-practices-ii/1041/
var smallestDistancePair = function(nums, k) {
    nums.sort((a,b) => a - b)
    let low  = 0
    let high = nums[nums.length - 1] - nums[0]
    
    while(low < high){
         let mid = low + Math.floor((high - low) / 2)
         let count = 0
         let j = 0
         //Đếm số lượng các cặp giá trị mà có hiệu giữa chúng lớn hơn hoặc bằng mid
         for (let i = 0; i < nums.length; i++){
             while (nums[i] - nums[j] > mid) j++; 
             //tìm ra giá trị mà tại đó cặp giá trị so với j <= mid
             count += i - j
         }
        
        // Nếu số cặp gía trị đó nhiều hơn k rồi thì thu hẹp vùng tìm kiếm lại
        if (count >= k) high = mid
        
        // Hoặc nếu giá trị đó nhỏ hơn k thì mở rộng vùng tìm kiếm ra
        else low = mid + 1 
    }
    return low
};