function frequencySort(s) {
    const charCount = {}; // สร้างออบเจกต์เพื่อเก็บจำนวนครั้งของแต่ละตัวอักษร
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1; // เพิ่มจำนวนครั้งของตัวอักษร
    }

    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]); // เรียงตัวอักษรตามความถี่

    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(charCount[char]); // สร้างสตริงที่เกิดจากการเรียงตัวอักษรตามความถี่
    }

    return result;
}

console.log(frequencySort("tree")); // "eert"
console.log(frequencySort("cccaaa")); // "cccaaa" หรือ "aaaccc" (ขึ้นอยู่กับการเรียง)
console.log(frequencySort("Aabb")); // "bbaA" หรือ "bbAa" (ขึ้นอยู่กับการเรียง)
