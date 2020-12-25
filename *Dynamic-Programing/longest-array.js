let dp = arr =>{
    let n = arr.length;
    if (n == 0) 
        return 0
    let L = Array(n).fill(1)
    let T = Array(n).fill(-1)
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < i; j ++) 
            if (arr[j] < arr [i] && L[i] < L[j] + 1){
                L[i] = L[j] + 1
                T[i] = j
            }
    }
    let max = L[0]
    console.log(L)
    for (let i = 0; i < L.length; i++){
        if (L[max] < L[i])
            max = i; 
    }
    console.log(max)
    let res = []
    while(max != -1)
    {
        res.unshift(arr[max])
        max = T[max]
    }    
    return res
}
console.log(dp([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]))