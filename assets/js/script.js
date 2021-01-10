// Assignment code here

// function for password length
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

var randomNumber = function(num) {
  var value = Math.floor(Math.random() * num);
  return value;
};

var generatePassword = function() {
  
  passLength = getPassLength();

  var passLowerCase = confirm("Do you want to use lowercase letters?");
  var passUpperCase = confirm("Do you want to use uppercase letters?");
  var passNumeric = confirm("Do you want to use numbers?");
  var passSpecial = confirm("Do you want to use special characters?");

  while (passLowerCase === false && passUpperCase === false && passNumeric === false && passSpecial === false) {
    alert("You must selection at least one of the parameters: LOWERCASE, UPPERCASE, NUMBERS, or SPECIAL CHARACTERS.")
    passLowerCase = confirm("Do you want to use lowercase letters?");
    passUpperCase = confirm("Do you want to use uppercase letters?");
    passNumeric = confirm("Do you want to use numbers?");
    passSpecial = confirm("Do you want to use special characters?");
  }

  var password = "";
  var lowerCase = "abcdefghiklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var numeric = randomNumber(9);
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  
  for (let i = 0; i < passLength; i++) {
    switch (randomNumber(4)) {
      case 0:
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        break;
      case 1:
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        break;
      case 2:
        password += numeric;
        break;
      case 3:
        password += specialChar[Math.floor(Math.random() * specialChar.length)];
    }
  }
  return password;
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