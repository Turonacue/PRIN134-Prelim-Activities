function oddeven(numbers) {
    
    const evennumbers = [];
    const oddnumbers = [];

    numbers.forEach(number => {
        if (number % 2 === 0) {
            evennumbers.push(number);
        } else {
            oddnumbers.push(number); 
        }
    });
console.log("Even Numbers: ", evennumbers);
console.log("Odd Numbers: ", oddnumbers);

console.log("Count of Even Numbers: ", evennumbers.length);
console.log("Count of Odd Numbers: ", oddnumbers.length);
}
const numbers = [10,35,75,4,21,7,85,2,46,24,72];

oddeven(numbers);
