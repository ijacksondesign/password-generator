// Assignment code here
var generatePassword = function() {

}

// functions for user input
var getPassLength = function() {
  var passLength = "";

  while (passLength === "" || passLength === null) {
    passLength = prompt("How long would you like your password? Please enter a number between 8 and 128.");

    if (passLength >= 8 && passLength <= 128) {
      return passLength;
    } else {
        alert("Invalid input.");
        getPassLength();
      }
  }
};

var getPassCase = function() {
  var passCase = "";

  while (passCase === "" || passCase === null) {
    passCase = prompt("Would you like lowercase or uppercase? Enter LOWER for lowercase or UPPER for uppercase.");

    if (passCase.toLowerCase() === "lower" || passCase.toLowerCase() === "upper") {
      return passCase;
    } else {
        alert("Invalid input.");
        getPassCase();
      }
  }
};

var getPassNumeric = function() {
  var passNumeric = "";

  while (passNumeric === "" || passNumeric === null) {
    passNumeric = prompt("Would you like to use numbers? Enter YES or NO.");
  }

  if (passNumeric.toLowerCase() === "yes" || passNumeric.toLowerCase() === "no") {
    return passNumeric;
  } else {
    alert("Invalid input.");
    getPassNumeric();
  }
};

var getPassSpecial = function() {
  var passSpecial = "";

  while (passSpecial === "" || passSpecial === null) {
    passSpecial = prompt("Would you like to use special characters? Enter YES or NO.");
  }

  if (passSpecial.toLowerCase() === "yes" || passSpecial.toLowerCase() === "no") {
    return passSpecial;
  } else {
    alert("Invalid input.");
    getPassSpecial();
  }
};

var userInput = {
  passLength: getPassLength(),
  passCase: getPassCase(),
  passNumeric: getPassNumeric(),
  passSpecial: getPassSpecial()
};

var passParameters = {
  charLowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  charUpperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  charNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  charSpecial = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '`'],
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// getPassLength();
// getPassCase();
// getPassNumeric();
// getPassSpecial();