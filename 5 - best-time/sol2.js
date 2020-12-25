var maxProfit = function(prices) {
    let n = prices.length;
    let res = 0;
    for (let i = 0; i < n - 1; i++){
        if(prices[i] < prices[i+1]){
            res += prices[i+1] - prices[i];
        }
    }
    return res;
};
console.log(maxProfit([7,1,5,3,6,4]));