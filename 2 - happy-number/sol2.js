//The first solution for this problem
let splitToNumberArray = (b) =>{
    let a = [];
    let n = b;
    let i = 0;
    while (n > 0){
        a[i++] = n % 10;
        n = Math.floor(n / 10);
    }
    return a;
}
let calSquare = (n) =>{
    let a = splitToNumberArray(n);
    let res = 0;
    for (let i = 0; i < a.length; i++ ){
        res +=  a[i]*a[i];
    }
    return res;
}
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    while(1)
    {
        slow = calSquare(slow);
        fast = calSquare(calSquare(fast));
        console.log(slow,' ', fast);
        if(slow == fast)
            break;
    }
    return (fast == 1);
};
console.log(isHappy(11111111));