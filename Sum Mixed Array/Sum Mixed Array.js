function sumMix(x){
    let i=0;
    let sum = 0;
    while(i<x.length){
        sum +=Number(x[i]);
        i++;
    }
    return sum;
}

console.log(sumMix([9, 3, '7', '3']));
