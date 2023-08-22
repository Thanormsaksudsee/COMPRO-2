function removeDups (string){
    let list = [];
    for(let i = 0; i < string.length; i++){
        let Dups = false;
        for(let j = 0; j < i; j++){
            // console.log(string[j]);
            if(string[i] === string[j]){
                Dups = true;
                break;
            }
            }
            if(!Dups){
                list.push(string[i])
        }

    }
    return list;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The","The","big","cat"]));


