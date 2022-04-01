// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// parent function to call when button is clicked, 
// to process user inputs and return a password accordingly
function generatePassword() {

  //create a variable pwLength which will be to the
  //return value of passwordLength from user input
  var pwLength = 0;


  //initialize an array of 4 false booleans, we will use the indices 0-3 
  //to identify lowercase, uppercase, numbers and special characters respectively
  var selectedCharacters = [false, false, false, false];

  pwLength = passwordLength(pwLength);


  //the return value of whichChars will
  //take user input to decide which chars the
  //password should include
  selectedCharacters = whichChars(selectedCharacters);

  return randomizePassword(pwLength, selectedCharacters);
}

//this function prompts the user to enter the length of their desired password
function passwordLength() {
  length = prompt("How long would you like your password to be? \n(Between 8-128 characters)");

  //if the user incorrectly follows directions they will be prompted over and over again
  //until they follow the directions
  if(length < 8 || length > 128 || isNaN(length)) {
    passwordLength(length);
  } 
  console.log("password length: " + length);
  //if the directions have been followed then we can return the length they requested
  return length;
}

//this function confirms which types of characters the user would like in their password
function whichChars(passwordCharacters) {

  passwordCharacters[0] = confirm("Do you want lowercase letters in your password?");
  passwordCharacters[1] = confirm("Do you want uppercase letters in your password?");
  passwordCharacters[2] = confirm("Do you want numbers in your password?");
  passwordCharacters[3] = confirm("Do you want special characters in your password?");

  //if the user did not confirm any of the previous questions this if statement
  //will find out because it checks if the array includes a true boolean at any index
  //if it does not find anything to be true it will alert the user and start the function
  //over again
  if (!passwordCharacters.includes(true)) {
    alert("You must have at least one type of character set for your password to generate.\nPlease try again.");
    whichChars(passwordCharacters);
  }
  console.log("passwordcharacter choices: " + passwordCharacters);
  return passwordCharacters;
}

//this function will randomly grab a character in the characterArray and push it to the passArray
function randomizePassword(max, booleanArray) {

  //initialize each set of characters for each option a user could select
  var specialCharacters = "!@#$%^&*()_+=,./?";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  
  //initialize an empty array to place randomized characters
  var passArray = [];

  //this for loop should loop to the max number of times
  //each if statement checks for what chars the user requested and places them accordingly
  for (var i = 0; i < max; i++) {
    if(booleanArray[0] && passArray.length < max) {
      passArray.push(lowercase[Math.floor(Math.random() * (lowercase.length - 1))]);
    }
    if(booleanArray[1] && passArray.length < max) {
      passArray.push(uppercase[Math.floor(Math.random() * (uppercase.length - 1))]);
    }
    if(booleanArray[2] && passArray.length < max) {
      passArray.push(nums[Math.floor(Math.random() * (nums.length - 1))]);
    }
    if(booleanArray[3] && passArray.length < max) {
      passArray.push(specialCharacters[Math.floor(Math.random() * (specialCharacters.length - 1))]);
    }
  }

  //we initialize the password variable by joining all the characters in the passArray with no spaces
  //this .join function will return a string
  var password = passArray.join('');
  return password;
}