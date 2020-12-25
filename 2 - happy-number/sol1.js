//The first solution for this problem

// Cách đầu tiên là cách dùng hashtable để lưu vết những phần tử đã duyệt qua rồi! 
// Nếu duyệt lại phần tử 2 lần thì giải thuật của ta đã ở trong vòng lặp vô tận => false
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
let calSquare = (a) =>{
    let res = 0;
    for (let i = 0; i < a.length; i++ ){
        res +=  a[i]*a[i];
    }
    return res;
}
var isHappy = function(n) {
    let res = n;
    let hash = {};
    while(1)
    {
        if (hash[res] == undefined){
            hash[res] = 1;
            let a = splitToNumberArray(res);
            res = calSquare(a);
            console.log(res);
            if (res == 1 ) return true;
        }
        else {
            return false; 
        }
    }
};
console.log(isHappy(11111111));