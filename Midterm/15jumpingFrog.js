function jumpingFrog(maxDistance, jumps) {
    let currentPosition = 0;
    let totalJumps = 0;

    for (const jump of jumps) {
        if (jump <= 0) {
            return "no chance"; // กระโดดไม่ได้ถ้าระยะทางที่ระบุน้อยกว่าหรือเท่ากับ 0
        }

        currentPosition += jump;
        totalJumps++;

        if (currentPosition >= maxDistance) {
            return totalJumps; // ถ้าถึงระยะทางที่กำหนดให้ก็คืนจำนวนครั้งที่กระโดด
        }
    }

    return "no chance"; // ถ้ากระโดดทุกครั้งแล้วยังไม่ถึงระยะทางที่กำหนด
}

console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 1])); // "no chance"
