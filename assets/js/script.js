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

var userInput = {
  passLength: getPassLength(),
  passLowerCase: confirm("Do you want to use lowercase letters?"),
  passUpperCase: confirm("Do you want to use uppercase letters?"),
  passNumeric: confirm("Do you want to use numbers?"),
  passSpecial: confirm("Do you want to use special characters?")
};

// function to validate user input


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