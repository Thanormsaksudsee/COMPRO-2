function numberSplit(number){
    let list = []
    let result = 0;
    let n = number / 2;
    let result2 = Math.floor(result+n)//ปัดลง
    let result1 = Math.ceil(result+n)//ปัดขึ้น
    list.push(result2)
    list.push(result1)
    return console.log(list);
}

numberSplit(4)
numberSplit(10)
numberSplit(11)
numberSplit(-9)