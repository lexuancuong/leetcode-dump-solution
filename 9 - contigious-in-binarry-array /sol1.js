let findMaxLength = nums => {
    let hash = {0: -1}; 
    let partial_sum = 0;
    let max_length = 0;
    for (i= 0; i < nums.length; i++){
        partial_sum += nums[i] ?  1 : -1;
        if (hash[partial_sum] === undefined){
            hash[partial_sum] = i
        }
        else{ 
            max_length = Math.max(max_length, i - hash[partial_sum])
        }
    }
    return max_length;
};
console.log(findMaxLength([0,1,1,0,1,0,1]));