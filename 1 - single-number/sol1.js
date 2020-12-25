//The first solution for this problem
var singleNumber= function(nums) { 
    let hash = {};
    for (let i = 0; i<nums.length; i++){
        if(hash[nums[i]] == undefined)
            hash[nums[i]] = 1;
        else 
            hash[nums[i]]++;
    }
    for (let i = 0; i < nums.length; i++)
        if (hash[nums[i]] == 1){
            console.log(hash)
            return nums[i];
        }
};
console.log(singleNumber([4,1,2,1,2,3,5,3,5]));