function reverseString(st){
    arr = ''
    for( i = st.length - 1; i >= 0; i--){
        arr += st[i]
    }
    return arr
}





console.log(reverseString("Hello, world!")); // ควรคืนค่า "!dlrow ,olleH"
console.log(reverseString("JavaScript")); // ควรคืนค่า "tpircSavaJ"
