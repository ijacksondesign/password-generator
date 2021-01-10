// Assignment code here


// function for password length
var getPassLength = function() {
  // creates an empty variable for the password length
  var passLength = "";

  // asks users to input how long they want their password to be
  while (passLength === "" || passLength === null) {
    passLength = prompt("How long would you like your password? Please enter a number between 8 and 128.");

    // checks to make sure user input fits length criteria
    if (passLength >= 8 && passLength <= 128) {
      return passLength;
    } else {
        // alerts user that they input an invalid answer      
        alert("Invalid input.");
        
        // runs function again for user to input a valid response
        getPassLength();
      }
  }
};

// function to output random numbers between 0 and the specified number
var randomNumber = function(num) {
  var value = Math.floor(Math.random() * num);
  return value;
};

// variables for the characters that can be used in the password
var lowerCase = "abcdefghiklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = "0123456789"
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// function to generates password
var generatePassword = function() {
  
  // calls the getPassLength function to get the password length from user
  passLength = getPassLength();

  // series of confirms to get requested password parameters from user
  var passLowerCase = confirm("Do you want to use lowercase letters?");
  var passUpperCase = confirm("Do you want to use uppercase letters?");
  var passNumeric = confirm("Do you want to use numbers?");
  var passSpecial = confirm("Do you want to use special characters?");

  // if user says no to all parameters, tells them they need to pick at least one, and asks them again
  while (passLowerCase === false && passUpperCase === false && passNumeric === false && passSpecial === false) {
    alert("You must selection at least one of the parameters: LOWERCASE, UPPERCASE, NUMBERS, or SPECIAL CHARACTERS.")
    passLowerCase = confirm("Do you want to use lowercase letters?");
    passUpperCase = confirm("Do you want to use uppercase letters?");
    passNumeric = confirm("Do you want to use numbers?");
    passSpecial = confirm("Do you want to use special characters?");
  }

  // empty password variable
  var password = "";
  
  // generates the password. runs until the password is the user's requested length
  for (let i = 0; i < passLength; i++) {
    
    // if user wants all password criteria
    if (passLowerCase === true && passUpperCase === true && passNumeric === true && passSpecial === true) {
      switch (randomNumber(4)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
        case 2:
          password += numeric[Math.floor(Math.random() * numeric.length)];
          break;
        case 3:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just lower, upper, and numbers criteria  
    else if (passLowerCase === true && passUpperCase === true && passNumeric === true) {
      switch (randomNumber(3)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
        case 2:
          password += numeric[Math.floor(Math.random() * numeric.length)];
      }
    }
    // if user wants just lower, upper, and special chars
    else if (passLowerCase === true && passUpperCase === true && passSpecial === true) {
      switch (randomNumber(3)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
        case 2:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just lower, numbers, and special chars  
    else if (passLowerCase === true && passNumeric === true && passSpecial === true) {
      switch (randomNumber(3)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += numeric[Math.floor(Math.random() * numeric.length)];
          break;
        case 2:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just upper, numbers, and special chars
    else if (passUpperCase === true && passNumeric === true && passSpecial === true) {
      switch (randomNumber(3)) {
        case 0:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
        case 1:
          password += numeric[Math.floor(Math.random() * numeric.length)];
          break;
        case 2:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just lower and upper
    else if (passLowerCase === true && passUpperCase === true) {
      switch (randomNumber(2)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
      }
    }
    // if user wants just lower and numbers
    else if (passLowerCase === true && passNumeric === true) {
      switch (randomNumber(2)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += numeric[Math.floor(Math.random() * numeric.length)];
      }
    }
    // if user wants just lower and special chars
    else if (passLowerCase === true && passSpecial === true) {
      switch (randomNumber(2)) {
        case 0:
          password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          break;
        case 1:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just upper and numbers
    else if (passUpperCase === true && passNumeric === true) {
      switch (randomNumber(2)) {
        case 0:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
        case 1:
          password += numeric[Math.floor(Math.random() * numeric.length)];
      }
    }
    // if user wants just upper and special
    else if (passUpperCase === true && passSpecial === true) {
      switch (randomNumber(2)) {
        case 0:
          password += upperCase[Math.floor(Math.random() * upperCase.length)];
          break;
        case 1:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just numbers and special chars
    else if (passNumeric === true && passSpecial === true) {
      switch (randomNumber(2)) {
        case 0:
          password += numeric[Math.floor(Math.random() * numeric.length)];
          break;
        case 1:
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    }
    // if user wants just lower
    else if (passLowerCase === true) {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    // if user wants just upper
    else if (passUpperCase === true) {
      password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    }
    // if user wants just numbers
    else if (passNumeric === true) {
      password += numeric[Math.floor(Math.random() * numeric.length)];
    }
    // if user wants just special chars
    else {
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