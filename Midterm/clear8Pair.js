function simplePair(number,result){
    list = []
    for(i of number){   
            for(j of number){
                if(i * j == result){
                    list.push(i,j)
                }
            }
    }
    
    let uniqueResult  = [...new  Set(list)]
    if( uniqueResult.length == 0){
        return console.log('null');
    }
    else{
        return console.log(uniqueResult );
    }
    
}


simplePair([1, 2, 3], 3)    
simplePair([1, 2, 3], 6)
simplePair([9, 2, 2], 27)
simplePair([10, 5, 2, 3, 7, 5], 10)
simplePair([9, 10, 2, 4], 20)




