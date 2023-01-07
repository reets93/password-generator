// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// // Function to prompt user for password options & Validate answers
function getPasswordOptions() {
  // Password length + validation
  var pwLength = prompt("How many characters would you like in your password?");
  while (pwLength < 8 || pwLength > 65) {
    pwLength = prompt("Your password needs between 11 & 65 characters. \n How many characters would you like in your password?");
  }

  // Character Types
  var lcChar = confirm("Would you like to use lower case characters? \n Click OK for yes.");
  var ucChar = confirm("Would you like to use upper case characters? \n Click OK for yes.");
  var spChar = confirm("Would you like to use special characters? \n Click OK for yes.");
  var numChar = confirm("Would you like to use numeric characters? \n Click OK for yes.");

  // Character types validation
  while (lcChar == false && ucChar == false && spChar == false && numChar == false) {
    alert("You need to select at least one type of character for your password. Please try again.")
    var lcChar = confirm("Would you like to use lower case characters? \n Click OK for yes.");
    var ucChar = confirm("Would you like to use upper case characters? \n Click OK for yes.");
    var spChar = confirm("Would you like to use special characters? \n Click OK for yes.");
    var numChar = confirm("Would you like to use numeric characters? \n Click OK for yes.");
  }

}


// Function for getting a random element from an array
function getRandom(arr) {
  // limit the randomised generator based on answers from prompts above. 

  if (lcChar == true) {
    randomLC(Math.floor(Math.random() * lowerCasedCharacters));
  }
  if (ucChar == true) {
    upperCasedCharacters;
  }
  if (spChar == true) {
    specialCharacters;
  }
  if (numChar == true) {
    numericCharacters;
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  console.log(pwLength + lcChar + ucChar + spChar + numChar)
  console.log("Testing this works")

  return "This is where the password goes"
}


// DO NOT MAKE CHANGES TO BELOW:
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);