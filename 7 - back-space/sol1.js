let backspaceCompare = (S, T) => {
    let stack1 = []; 
    let stack2 = [];
    let i = 0; 
    for (i = 0; i < S.length ; i++){
        if (S[i] != '#')
            stack1.push(S[i]);
        else
            stack1.pop();
    }
    for (i = 0; i < T.length ; i++){
        if (T[i] != '#')
            stack2.push(T[i]);
        else
            stack2.pop();
    }

    if (stack1.length != stack2.length){
        return false;
    }
    for (i = 0; i < stack1.length; i++){
        if (stack1[i] != stack2[i])
            return false;
    }
    return true;
};
console.log(backspaceCompare("ab##",'c#d#'));
