var maxProfit = function(prices) {
    let n = prices.length;
    if (n == 1)
        return 0;
    let count = 0;
    let ar = [];
    for (let i = 0; i < n; i++){
        if(prices[i] < prices[i+1]){
            let j = i + 1;
            while(prices[j] > prices[j-1]){
                j++;
            }
            ar[count++] = [prices[i],prices[j-1]];
            i = j - 1;
        }
    }
    let res = 0;
    for (let i = 0; i < ar.length; i++){
        res += ar[i][1] - ar[i][0];
    }
    return res;
};
console.log(maxProfit([7,1,5,3,6,4]));