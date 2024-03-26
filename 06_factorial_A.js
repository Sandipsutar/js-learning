

console.log("******* Factorial of number Assignment");
const factorialOfNum = (num) => {
    if (num === null || num === undefined || isNaN(num)) {
        
        return;
    }
    
    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }
    
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    
    return factorial;
};


console.log("Factorial of 5 is :", factorialOfNum(5));
console.log("Factorial of 3 is :", factorialOfNum(3));
console.log("Factorial of null is :", factorialOfNum(null));
console.log("Factorial of 8 is :", factorialOfNum(8));
console.log("Factorial of undefined is:", factorialOfNum(undefined));
console.log("Factorial of 9 is :", factorialOfNum(9));
console.log("Factorial of 0 is :", factorialOfNum(0));
