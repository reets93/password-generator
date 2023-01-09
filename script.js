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

// // Function to prompt user for password options & Validate answers
function getPasswordOptions() {
  // Password length + validation
  pwLength = prompt("How many characters would you like in your password? \n It must be between 10 - 64 characters long.");
  while (pwLength < 10 || pwLength > 64) {
    pwLength = prompt("Your password needs between 10 & 64 characters. \n How many characters would you like in your password?");
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
      // lowerCasedCharacters.concat(pwArray);
  }
  if (ucChar == true) {
      pwCriteria.push(upperCasedCharacters);
      // upperCasedCharacters.concat(pwArray);
  }
  if (spChar == true) {
      pwCriteria.push(specialCharacters);
      // specialCharacters.concat(pwArray);
  }
  if (numChar == true) {
      pwCriteria.push(numericCharacters);
      // specialCharacters.concat(pwArray);
  }
  console.log(pwCriteria)

  // console.log(typeof pwCriteria)
  // console.log(typeof pwLength)
  // console.log(typeof +pwLength)
}

+pwLength;
var rndmPW = "";

// Function for getting a random element from an array
function getRandom() {
// how do i generate a random order of items from the "true" arrays that are in my pwCriteria? 
// then I want to slice based on the pwlength
// rndmPW = rndmPW.slice(0,pwlength)

// OR: I wanted to do a for loop and access one random item from the pwCriteria object with each iteration to match the length of the password
  for (let i = 0; i <= +pwLength; i++) {
    // rndmPW = Math.floor(Math.random()*pwCriteria);
    // PW += pwCriteria(rndmPW, rndmPW +1);
    // rndmPW = Math.floor(Math.random() * pwCriteria)
    // rndmPW = pwCriteria[Math.floor(Math.random() * pwCriteria)]
  }
  console.log(rndmPW)
}



// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  getRandom()
  return "This is the password: " + rndmPW
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