console.log("============step 1==============");
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const result = isPrime(3);
   console.log(`Is 3 Prime Number : ${result}`);
   const result1 = isPrime(9);
   console.log(`Is 9 Prime Number : ${result1}`);
   const result2 = isPrime(6);
   console.log(`Is 6 Prime Number : ${result2}`);
   const result3 = isPrime(19);
   console.log(`Is 19 Prime Number : ${result3}`);
   const result4 = isPrime(29);
   console.log(`Is 29 Prime Number : ${result4}`);
   const result5 = isPrime(53);
   console.log(`Is 53 Prime Number : ${result5}`);

// Function to count prime numbers in an array
function countPrimeNumbers(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            count++;
        }
    }
    return count;
   
}


// Array of numbers
const array = [3, 9, 7, 6, 19, 29, 53];

// Count prime numbers in the array
const primeCount = countPrimeNumbers(array);
console.log("Given array :",array);
console.log("Number of prime numbers:", primeCount);

// Function to count spaces in a string
function spaceCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count;
}
console.log("============step 2==============");
// Test the spaceCount function with the given strings
const sentence1 = "Revision is the mother of success";
const sentence2 = "Java Script is the language of internet world";
console.log("Number of spaces in sentence1:", spaceCount(sentence1));
console.log("Number of spaces in sentence2:", spaceCount(sentence2));
