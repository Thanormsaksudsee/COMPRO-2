function truncateString(text, maxLength) {
    arr = []
    for(i of text){
        if(arr.length < maxLength){
            arr.push(i)
        }
        
    }
    arr.push('...')
    return arr.join('')

  }
  
  console.log(truncateString("Lorem ipsum dolor sit amet", 12)); // คืนค่า "Lorem ipsum..."
  console.log(truncateString("JavaScript is amazing", 8)); // คืนค่า "JavaS..."
  