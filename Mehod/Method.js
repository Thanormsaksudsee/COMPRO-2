const message = "Hello, world!";
console.log(message.length);
console.log(message.indexOf("world"));
console.log(message.substring(0, 5));
console.log(message.split(", "));


// การทำงานกับข้อความ (Strings):
// string.length: ใช้ในการหาความยาวของข้อความ
// string.indexOf(): ใช้ในการค้นหาตำแหน่งของ substring ในข้อความ
// string.substring(): ใช้ในการสกัด substring ออกมาจากข้อความ
// string.split(): ใช้ในการแยกข้อความเป็นส่วนๆ โดยใช้ตัวกำหนดเป็นตัวแบ่ง



const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
numbers.push(6);
numbers.pop();

// การทำงานกับอาร์เรย์ (Arrays):
// array.length: ใช้ในการหาความยาวของอาร์เรย์
// array.push(): ใช้ในการเพิ่มค่าไปยังสุดท้ายของอาร์เรย์
// array.pop(): ใช้ในการลบค่าที่ตำแหน่งสุดท้ายของอาร์เรย์
// javascript


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  console.log(person.firstName);
  
//   การทำงานกับออบเจ็กต์ (Objects): การสร้างและใช้งานออบเจ็กต์เพื่อจัดเก็บข้อมูลแบบ key-value


const text = "Hello, world!";
console.log(text.length); // 13

const firstChar = text[0]; // "H"
const lastChar = text[text.length - 1]; // "!"

การเข้าถึงตัวอักษรและความยาวของข้อความ:
// 


const name = "Alice";
const greeting = "Hello, " + name + "!";
console.log(greeting);

// หรือใช้ Template Literals
const greetingTemplate = `Hello, ${name}!`;
console.log(greetingTemplate);


// การต่อข้อความ (String Concatenation) และการใช้ Template Literals:


const sentence = "I love JavaScript, JavaScript is amazing!";
const searchTerm = "JavaScript";
const indexOfTerm = sentence.indexOf(searchTerm); // 2
const replacedSentence = sentence.replace(searchTerm, "Python");
console.log(replacedSentence);

// การค้นหาและแทนที่ข้อความ:


const longText = "This is a very long text.";
const subText = longText.substring(5, 10); // "is a "

// การแบ่งข้อความเป็นส่วนย่อย (Substring):


const originalText = "uppercase";
const upperCaseText = originalText.toUpperCase(); // "UPPERCASE"
const lowerCaseText = originalText.toLowerCase(); // "uppercase"

// การเปลี่ยนรูปแบบตัวอักษร:

const paddedText = "   padded   ";
const trimmedText = paddedText.trim(); // "padded"

// การตัดช่องว่างข้างหน้าและข้างหลัง (Trimming):


const csvData = "John,Doe,30";
const dataArray = csvData.split(","); // ["John", "Doe", "30"]

// การแยกข้อความเป็นอาร์เรย์ (Splitting into an Array):


const text = "Hello, world!";
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("world!")); // true


// การตรวจสอบข้อความว่าเริ่มต้นหรือลงท้ายด้วยคำที่กำหนด:


const text = "Hello, world!";

const pattern = /world/;
console.log(pattern.test(text)); // true

const replacedText = text.replace(/world/, "universe");
console.log(replacedText); // "Hello, universe!"

// การใช้งาน RegEx (Regular Expressions): ใช้ในการค้นหาและแก้ไขข้อความที่มีลำดับหรือรูปแบบที่กำหนด




const text = "Hello, world!";
console.log(text.includes("world")); // true


// การใช้งาน includes(): ใช้ในการตรวจสอบว่าข้อความมีอยู่ในข้อความหรือไม่


const repeatedText = "abc".repeat(3); // "abcabcabc"

// การใช้งาน repeat(): ใช้ในการทำซ้ำข้อความตามจำนวนครั้งที่กำหนด



const originalText = "42";
const paddedText = originalText.padStart(5, "0"); // "00042"

// การใช้งาน padStart() และ padEnd(): ใช้ในการเติมอักขระเพิ่มเข้าไปข้างหน้าหรือข้างหลังของข้อความเพื่อให้มีความยาวที่กำหนด
// javascript


const text = "Hello, world!";
const matches = text.match(/l/g); // ["l", "l", "l"]

// การใช้งาน match(): ใช้ในการค้นหา substring ในข้อความ และส่งคืนเป็นอาร์เรย์ของผลลัพธ์ที่ตรงกัน

const text = "Hello, world!";
const slicedText = text.slice(7, 12); // "world"

// การใช้งาน slice(): ใช้ในการดึง substring ออกมาจากข้อความโดยกำหนดตำแหน่งเริ่มต้นและสิ้นสุด

const str1 = "apple";
const str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (lexicographically)


// การใช้งาน localeCompare(): ใช้ในการเปรียบเทียบสตริงทั้งสองแบบนามธรรม เพื่อหาค่าเปรียบเทียบ





