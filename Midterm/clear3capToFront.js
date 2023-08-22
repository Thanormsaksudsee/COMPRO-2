function capToFront(word){  
    let big = []
    let small = []
    for (i of word){
        if ( i === i.toUpperCase()){
            big.push(i)
        }else{
            small.push(i)
        }
    }
    let mix = big.concat(small)//รวมlist
    return console.log(mix.join(''));
}

capToFront("hApPy")
capToFront("moveMENT")
capToFront("shOrtCAKE")
