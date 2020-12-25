/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length){
        let tmp = nums1
        nums1 = nums2
        nums2 = tmp
    }
    let A = nums1
    let B = nums2
    console.log(A)
    console.log(B)
    
    let min = A.length
    let max = B.length
    
    let imin = 0
    let imax = min
    let maxLeft
    let maxRight
    
    let mid = Math.floor( (max + min + 1) / 2)
    while (imin <= imax){
        let i = Math.floor((imin + imax) / 2)
        let j = mid - i
        if (j < max && B[j - 1] > A[i])
            imin = i + 1
        else if (j > 0 && B[j - 1] > A[i])
            imax = i - 1
        else {
            if (i == 0) 
                maxLeft = A[j-1]
            else if (j == 0)
                maxLeft = B[i-1]
            else maxLeft = Math.max(A[j-1],B[i-1])
            
            
            if ((min + max) % 2 == 1) 
                return maxLeft
         
            
            if (i == max) 
                maxRight = A[j]
            else if (j == min)
                maxRight = B[i]
            else maxRight = Math.min(A[j],B[i])
            
            return (maxLeft + maxRight) / 2
            
        }
    }
};