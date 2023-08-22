function isValidIP(IP) {
    const components = IP.split(".");
    
    if (components.length !== 4) {
        return false;
    }
    for (const component of components) {
        if (component.startsWith("0")) { 
            return false;
        }
        if (!/^\d+$/.test(component) || parseInt(component) < 0 || parseInt(component) > 255) {
            return false;
        }
    }
    
    return true;
}

console.log(isValidIP("1.2.3.4")); 
console.log(isValidIP("0.2.3."));  
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.045.067.089"));



// function isValidIP(IP) {
//     IPgen = iP.split(".")
//     if ( IPgen.length !== 4){
//         return false;
//     }
//     if 
//     return true;
// }

// console.log(isValidIP("1.2.3.4")); 
// console.log(isValidIP("0.2.3."));  
// console.log(isValidIP("123.45.67.89"));
// console.log(isValidIP("123.045.067.089"));
