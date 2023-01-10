
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
var pwCriteria = [];
var pwLength;
// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
// // Function to prompt user for password options & Validate answers
function getPasswordOptions() {
  // Password length + validation
  pwLength = prompt("How many characters would you like in your password? \n It must be between 10-64 characters long.");
  if (pwLength < 10 || pwLength > 64) {
    pwLength = prompt("Your password needs to be between 10-64 characters. \n How many characters would you like in your password?");
  }
  console.log(pwLength);
  //   // Character Types
  var lcChar = confirm("Would you like to use lower case characters? \n Click OK for yes.");
  var ucChar = confirm("Would you like to use upper case characters? \n Click OK for yes.");
  var spChar = confirm("Would you like to use special characters? \n Click OK for yes.");
  var numChar = confirm("Would you like to use numeric characters? \n Click OK for yes.");

  // Character types validation
  if (lcChar == false && ucChar == false && spChar == false && numChar == false) {
    alert("You need to select at least one type of character for your password. Please try again.");
    var lcChar = confirm("Would you like to use lower case characters? \n Click OK for yes.");
    var ucChar = confirm("Would you like to use upper case characters? \n Click OK for yes.");
    var spChar = confirm("Would you like to use special characters? \n Click OK for yes.");
    var numChar = confirm("Would you like to use numeric characters? \n Click OK for yes.");
  }

  // if they choose ------ lowercase -------
  if (lcChar == true) {
    for (let i = 0; i < +pwLength; i++) {
      var randomLowercase = getRandom(lowerCasedCharacters);
      pwCriteria.push(randomLowercase);
    }
    console.log(pwCriteria)
  }
  // if they choose ------ uppercase -------
  if (ucChar == true) {
    for (let i = 0; i < +pwLength; i++) {
      var randomUppercase = getRandom(upperCasedCharacters);
      pwCriteria.push(randomUppercase);
    }
    console.log(pwCriteria)
  }

  // if they choose ------ special -------
  if (spChar == true) {
    for (let i = 0; i < +pwLength; i++) {
      var randomSpecial = getRandom(specialCharacters);
      pwCriteria.push(randomSpecial);
    }
    console.log(pwCriteria)
  }
  // if they choose ------ numeric -------
  if (numChar == true) {
    for (let i = 0; i < +pwLength; i++) {
      var randomNumeric = getRandom(numericCharacters);
      pwCriteria.push(randomNumeric);
    }
    console.log(pwCriteria)
  }


}

var rndmPW = [];
+pwLength;

var thePW = [];
rndmPW = getRandom(pwCriteria)

function generateRndmPw(arr) {
  let i = 0;
  for (let i = 0; i < +pwLength; i++) {
    rndmPW = getRandom(pwCriteria);
    thePW.push(rndmPW);
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  generateRndmPw(pwCriteria)
  return "This is the password: " + thePW.join('')
}

// -----------------------------------------------------

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