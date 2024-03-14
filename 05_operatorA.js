console.log("========= Step-1 ==============");
// Function to find the square of the length of a word
function squareOfWordLength(word) {
    var length = word.length;
    var square = length * length;
    console.log(`Length square of "${word}" is: ${square}`);
}

// Invoke the function for each word
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("========= Step-2 ==============");
// Function to perform calculations on a given string
function calculateStringStats() {
    var string = "I am Angular Developer";
    var words = string.split(/\s+/); // Splitting the string by spaces to get individual words
    var totalWords = words.length;
    var stringLength = string.length;

    // Calculate and log the result of dividing string length by total number of words
    console.log(`Result of dividing string length by total number of words is: ${stringLength / totalWords}`);

    // Calculate and log the result of multiplying string length by total number of words
    console.log(`Result of multiplying string length by total number of words is: ${stringLength * totalWords}`);
}

// Invoke the function
calculateStringStats();
