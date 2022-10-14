function firstNonConsecutive (arr) {
    for(let i=0;i+1<arr.length;i++){
        if((arr[i]+1)!=arr[i+1]){
            return arr[i+1];
        }
    }
    return null;
}