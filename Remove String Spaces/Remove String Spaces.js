function noSpace(x){
    let i=0;
    let word='';
    while (i<x.length) {
        if (x[i] != " "){
            word +=x[i];}
        i++;
    }
    return word;
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));