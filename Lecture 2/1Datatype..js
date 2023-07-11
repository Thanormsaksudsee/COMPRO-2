const people = ["Aaron","Mel","John"];
const one = 1;
const str = "Hello Worlrd";
const b = true;
const emplployee = {
    firstName: "Thanormsak",
    lastName: "Sudsee",
};

function sayHello(person) {
    console.log("Liang Love " + person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(emplployee instanceof Array);
sayHello(emplployee);