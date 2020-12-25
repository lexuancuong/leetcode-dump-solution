//The second solution for this problem
var singleNumber = function(nums) { 
    let res;
    for (let i = 0; i<nums.length; i++){
        res = res ^ nums[i]
    }
    return res;

};
console.log(singleNumber([4,1,2,1,2,3,5,3,5]));