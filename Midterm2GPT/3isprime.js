function isPrime(n){
    if(n == 1 || n % 2 == 0|| n % 3 == 0|| n % 5 == 0|| n % 7 == 0 && n !== 2 && n % 3 == 0 && n % 5 == 0 && n % 7 == 0){
        return false
    }else{
        return true
    }
}



console.log(isPrime(7)); // ควรคืนค่า true
console.log(isPrime(12)); // ควรคืนค่า false
console.log(isPrime(13));

