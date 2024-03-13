console.log(`========== Step-1 ==================`);
function greetHandsOn() {
    const greet = " Hey you are doing good, keep it up ";

    console.log(`========== Step-2 ==================`);
    // 1. Print the string as it is on console
    console.log(`Original String: "${greet}"`);
    
    console.log(`========== Step-3 ==================`);
    // 2. Calculate length of the String
    const length = greet.length;
    console.log(`Length of string is: ${length}`);

console.log(`========== Step-4 ==================`);
    // 3. Remove the leading and trailing extra spaces and log string on console with its length
    const trimmedgreet = greet.trim();
    console.log(`Trimmed String: "${trimmedgreet}"`);
    console.log(`Length of trimmed string is: ${trimmedgreet.length}`);

console.log(`========== Step-5 ==================`);
    // 4. Print the total number of extra spaces count that is removed in step 3
    const extraSpacesCount = greet.length - trimmedgreet.length;
    console.log(`Total number of extra spaces removed: ${extraSpacesCount}`);

console.log(`========== Step-6 ==================`);
    // 5. Print the first and last character on the same line after trim
    console.log(`First character: ${trimmedgreet[0]}, Last character: ${trimmedgreet[trimmedgreet.length - 1]}`);

console.log(`========== Step-7 ==================`);
    // 6. Print the count of total words available in the string after step 3
    const wordsCount = trimmedgreet.split(/\s+/).length;
    console.log(`Total number of words in trimmed string: ${wordsCount}`);

console.log(`========== Step-8 ==================`);
    // 7. Print the index of word "good" from the given string
    const goodIndex = trimmedgreet.indexOf("good");
    console.log(`Index of word "good": ${goodIndex}`);
    

    console.log(`========== Step-9 ==================`);
    // 8. Print the substring starting from index 22, using substring
    const subString = trimmedgreet.substring(22);
    console.log(`Substring starting from index 22: "${subString}"`);

console.log(`========== Step-10 ==================`);
    // 9. Check if string ends with word "up" after step 3
    const endsWithUp = trimmedgreet.endsWith("up");
    console.log(`Does string ends with "up"? ${endsWithUp}`);

console.log(`========== Step-11 ==================`);
    // 10. Check if string starts with word "Hey" after trimming
    const startsWithHey = trimmedgreet.startsWith("Hey");
    console.log(`Does string starts with "Hey"? ${startsWithHey}`);
}

// Invoke the function
greetHandsOn();
