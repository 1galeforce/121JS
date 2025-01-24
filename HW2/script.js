// Name: Gale Erie
// Author: Gale Erie
// Date: January 19, 2025
// Function to translate a word to Pig Latin
function translateToPigLatin(word) {
    // Function to check if a character is a vowel
    function isVowel(char) {
        return 'AEIOUaeiou'.indexOf(char) !== -1; 
        // Checks if the character is in the string of vowels using indexOf.
        // indexOf() returns the index of the first occurrence of a specified value, or -1 if it is not found.
    }

    // Message for single-letter words
    if (word.length === 1) {
        return "Input can't be translated.";
    } 
    // If the word starts with a vowel, append 'way' to the end
    else if (isVowel(word[0])) {
        return word + 'way';
    } 
    // If the word starts with a consonant followed by a vowel, move the first letter to the end and add 'ay'
    else if (!isVowel(word[0]) && isVowel(word[1])) {
        return word.slice(1) + word[0] + 'ay'; 
        // slice() extracts a section of a string and returns it as a new string without modifying the original string.
        // In this case, it gets the part of the word from the second character to the end.
    } 
    // For words that start with two consonants, move the first two letters to the end and add 'ay'
    else {
        return word.slice(2) + word[0] + word[1] + 'ay';
        // Here, slice(2) is used to get the part of the word from the third character to the end.
    }
}

// Function to translate the phrase input and display the result
function translateAndDisplay() {
    let phrase = document.getElementById("phraseInput").value; // Gets the input phrase
    let historyContainer = document.getElementById("historyContainer"); // Gets the container to display translation history

    // If the input is empty, just whitespace, or a single character, display a message
    if (!phrase || phrase.trim().length === 0 || phrase.length === 1) {
        historyContainer.innerHTML += "<div class='history-item'>Input can't be translated.</div>"; 
        // trim() removes whitespace from both ends of a string.
    } 
    // Otherwise, process the input phrase
    else {
        let words = phrase.split(" "); // Splits the phrase into words.
        // split() divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
        let translatedWords = words.map(translateToPigLatin); // Translates each word to Pig Latin
        let translatedPhrase = translatedWords.join(" "); // Joins the translated words into a new phrase

        // Prepare the text for display
        let originalText = "You entered: " + phrase;
        let translatedText = "Translated to Pig Latin: " + translatedPhrase;

        // Creates a new history item and adds it to the history container
        let historyItem = "<div class='history-item'><p>" + originalText + "</p><p>" + translatedText + "</p></div>";
        historyContainer.innerHTML += historyItem;

        // Clear the input box for the next entry
        document.getElementById("phraseInput").value = "";
    }
}

/*
 * Logical Operators:
 * - && (AND): Checks if both conditions are true.
 * - || (OR): Checks if at least one condition is true.
 * - ! (NOT): Inverts the boolean value of a condition.
 *
 * Comparison Operators:
 * - === (strict equality): Checks if values are equal and of the same type.
 * - !== (strict inequality): Checks if values are not equal or not of the same type.
 * - < (less than): Checks if the left value is less than the right value.
 * - <= (less than or equal to): Checks if the left value is less than or equal to the right value.
 * - > (greater than): Checks if the left value is greater than the right value.
 * - >= (greater than or equal to): Checks if the left value is greater than or equal to the right value.
 *
 * Conditional Statements:
 * - if: Executes code if a condition is true.
 * - else if: Executes code if the previous condition is false and the new condition is true.
 * - else: Executes code if none of the previous conditions are true.
 */




