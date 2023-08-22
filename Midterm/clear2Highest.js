function highest(n){

    let sting = n.toString()
    let arr = sting.split('')
    let sort = arr.sort()
    let result1 = sort.length -1
    let result = sort[result1]



    return console.log(result);
}
highest(379)
highest(377401)
highest(165749816279832)