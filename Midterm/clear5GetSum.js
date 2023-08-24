function getBudgets(people) {
    let total = 0;
    for ( i of people ){
        total += i.budget;
    }
    return total
}
console.log(getBudgets([
    {name: "John",age: 21, budget: 23000},
    {name: "big",age: 32, budget: 40000},
    {name: "mar",age: 16, budget: 2700}
]))