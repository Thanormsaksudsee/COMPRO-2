function isValidIP(IP) {
    result = true
    arr = [];
    IP1 = IP.split('.')
    if(IP1.length !== 4){
        return false
        
    }

    for(i of IP1){

        if(i < 1 || i > 255 || i[0] == 0){
            return false
        }
    }

    

    return   true 

}
  
console.log(isValidIP("254.2.0.4")); 
console.log(isValidIP("0.2.3"));  
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.045.067.089"));
console.log(isValidIP("123.456.78.90"));



