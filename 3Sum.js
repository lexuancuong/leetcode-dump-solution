// https://leetcode.com/problems/3sum/submissions/
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let n = nums.length
    if (n < 3)
        return []
    let ans = []
    let count = 0

    // Duyệt các phần tử bé hơn 0
    while(nums[count] <= 0){
        let left = count + 1 
        let right = n - 1 
        let target = 0 - nums[count]
        while(left < right){   //Tìm kiếm trong khoảng từ count + 1 đến vị trí n phẩn tử thoả điều kiện
            if (nums[left] + nums[right] == target){
                ans.push([nums[count],nums[left],nums[right]])
                while(left < right && nums[left] == nums[left+1]) left++   //Bỏ qua những phần tử trùng lặp
                while(left < right && nums[right] == nums[right-1]) right--
                left++  // Tiếp tục duyệt đoạn con trong nó
                right-- // || 
            }
            else if (nums[left] + nums[right] < target)
                left++
            else 
                right--
        }
        //Bỏ qua phần tử lặp phía dưới
        while(nums[count] == nums[count+1])
            count++
        count++
    }
    return ans
};
