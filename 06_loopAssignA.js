
console.log(`=========Step 1 ==========`);
// 1. Count the total number of vowels using a for loop
const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log("Total number of vowels:", count);
};

// Test case for counting vowels
countVowels("I am very good IT Developer");

console.log(`=========Step 2 ==========`);

// 2. Function to get the sum of cube of numbers from 1 to 5
const sumOfCubes = () => {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i * i * i;
    }
    console.log("Sum of cubes from 1 to 5:", sum);
};

// Test case for sum of cubes
sumOfCubes();
console.log(`=========Step 3 ==========`);
// 3. Function to log only odd positioned characters in a string
const oddPositionedChars = (str) => {
    console.log("Odd positioned characters:");
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0 && str[i] !== " ") {
            console.log(str[i]);
        }
    }
};

// Test cases for odd positioned characters in string1 and string2
console.log("For string1:");
oddPositionedChars("Hard work always pays back");
console.log("For string2:");
oddPositionedChars("Soon I will be UI IT Champ");
