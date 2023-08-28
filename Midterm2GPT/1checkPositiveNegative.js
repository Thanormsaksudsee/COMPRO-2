function checkPositiveNegative(n){
    if(n > 0){
        return "Positive"
    }
    if(n < 0){
        return "Negative"
    }
    if(n == 0){
        return "Zero"
    }
}




console.log(checkPositiveNegative(5)); // ควรพิมพ์ "Positive"
console.log(checkPositiveNegative(-3)); // ควรพิมพ์ "Negative"
console.log(checkPositiveNegative(0)); // ควรพิมพ์ "Zero"
