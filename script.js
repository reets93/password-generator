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

var pwCriteria = []
var pwLength;

// // Function to prompt user for password options & Validate answers
function getPasswordOptions() {
  // Password length + validation
  pwLength = prompt("How many characters would you like in your password?");
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

  // push chosen arrays into a new array - pwCriteria
  if (lcChar == true) {
    pwCriteria.push(lowerCasedCharacters);
  }
  if (ucChar == true) {
    pwCriteria.push(upperCasedCharacters);
  }
  if (spChar == true) {
    pwCriteria.push(specialCharacters);
  }
  if (numChar == true) {
    pwCriteria.push(numericCharacters);
  }

  console.log(pwCriteria)
}

+pwLength;
var rndmPW = "";

// Function for getting a random element from an array
function getRandom(arr) {
  for (let i = 0; i <= +pwLength; i++) {
    rndmPW = (Math.floor(Math.random() * pwCriteria[i]))
  }
  console.log(rndmPW)
}


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  getRandom()
  return rndmPW + " Here it is"
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