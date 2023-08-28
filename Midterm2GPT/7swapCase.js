function swapCase(st){
    let arr = ''
    for(i of st){
        if(i == i.toUpperCase()){
            arr += i.toLowerCase()
        }else{
            arr += i.toUpperCase()
        }
    }
    return arr
}



console.log(swapCase("Hello, World!")); // ควรคืนค่า "hELLO, wORLD!"
console.log(swapCase("JavaScript Is Fun")); // ควรคืนค่า "jAVASCRIPT iS fUN"
