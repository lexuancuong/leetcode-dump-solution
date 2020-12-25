// Đếm số số 0, những phần tử nào khác không sẽ được dồn về đầu mảng
// số các phần tử bằng 0 = count_zeroes. Gán count_zeroes phần tử cuối mảng bằng 0
var moveZeroes = function(nums) {
    let n = nums.length; 
    let i;
    let count = 0; 
    for (i = 0; i < n; i++ ){
        if (nums[i] == 0){
            count++;
        }
    }
    let run = 0;
    for (i=0; i < n; i++){
        if(nums[i] != 0){
            nums[run++] = nums[i];
        }
    }
    for (i = run; i < n; i++)
    {
        nums[i] = 0;
    }
};
var moveZeroes1 = function(nums) {
    let n = nums.length; 
    let i;
    let count = 0; 
    for (i = 0; i < n; i++ ){
        if (nums[i] != 0){
            nums[count++] = nums[i];
        }
    }
    for (i = count; i < n; i++)
    {
        nums[i] = 0;
    }
};
let a = [0,1,0,3,12];
moveZeroes1(a); 
console.log(a);