function capToFront(string){
    let keep = [];
    for ( let i of string) {
        if ( i == i.toUpperCase() ) {
            keep.push(i)
        }
    }
    for ( let j of string) {
        if ( j == j.toLowerCase() ) {
            keep.push(j)
        }
    }
    console.log(keep.join(''));
}
capToFront("moveMENT")