function sumTWOSmallNums(number){
    let arr = [];
    for(let i = 0; i < number.length; i++){ 
        if ( number[i] >= 0){
            arr.push(number[i])
        }
    }
        let number2 = arr.sort(function(a,b){
            return a - b;
        })
        
        let result = number2[0]+number2[1]

    
    
    return console.log(result);;
}



sumTWOSmallNums([10, 343445353, 3453445, 3453545353453])
sumTWOSmallNums([19, 5, 42, 2, 77])
sumTWOSmallNums([2, 9, 6, -1])
sumTWOSmallNums([280, 134, 108])
sumTWOSmallNums([3683, 2902, 3951, -475, 1617, -2385])


    // for(let i = 0; i < number.length; i++){
        
        
    // }

//     sumTWOSmallNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// sumTWOSmallNums([3683, 2902, 3951, -475, 1617, -2385])