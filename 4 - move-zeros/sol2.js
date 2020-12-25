var moveZeroes = function(nums) {
    let n = nums.length; 
    let i;
    let count = 0; 
    for (i = 0; i < n; i++ ){
        if(nums[i] != 0){
            let tmp = nums[count];
            nums[count]=nums[i];
            nums[i] = tmp; 
            count++;
        }
    }
};
let a = [0,1,0,3,12];
moveZeroes(a); 
console.log(a);