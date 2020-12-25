let countElement = a => {
    hash = {}; 
    a.map(value => hash[value] === undefined ? hash[value] = 1 : 0)
    let count = 0;
    a.map(value => {
        count += hash[value + 1] === undefined ? 0 : 1;
    })
    return count;
}
console.log(countElement([1,1,3,3,5,5,7,7]));