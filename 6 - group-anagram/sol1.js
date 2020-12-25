let areAnagrams = (str1,str2) => {
    if(str1.length != str2.length)
        return false;
    let hash = {};
    let i; 
    for (i = 0; str1[i] && str2[i]; i++){
        if(hash[str1[i]] == undefined){
            hash[str1[i]] = 1;
        }
        else{
            hash[str1[i]]++;
        }
        if(hash[str2[i]] == undefined){
            hash[str2[i]] = 1;
        }
        else{
            hash[str2[i]]++;
        }
    }
    for (i = 0; i < hash.length; i++){
        if(hash[i] % 2 == 1)
        return false;
    }
    return true;
}
var groupAnagrams = function(strs) {
    
};