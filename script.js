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

  //create a variable pwLength which is set to the
  //return value of passwordLength from user input
  var pwLength = passwordLength();

  //create a variable selectedCharacters which will take
  //the return value of whichChars, a function who
  //takes user input to decide which chars the
  //password should include
  var selectedCharacters = whichChars();

  //create a variable randoArray which will take in
  // the createCharArray return value, which will be
  //an array of all the characters the user allowed to
  //be in the password
  var randoArray = createCharArray(selectedCharacters);

  var passArray = [];

  for (var i = 0; i < pwLength+1; i++) {
    passArray.push(randoArray[Math.floor(Math.random() * (randoArray.length - 1))]);
  }

  var password = passArray.join('');
  password = password.slice(0,pwLength);
  return password;
}

//this function prompts the user to enter the length of their desired password
function passwordLength() {
  var length;
  length = prompt("How long would you like your password to be? \n(Between 8-128 characters)");

  //if the user incorrectly follows directions they will be prompted over and over again
  //until they follow the directions
  if(length < 8 || length > 128) {
    passwordLength();
  } 

  //if the directions have been followed then we can return the length they requested
  return length;
}

//this function confirms which types of characters the user would like in their password
function whichChars() {

  //initialize an array of 4 false booleans, we will use the indices 0-3 
  //to identify lowercase, uppercase, numbers and special characters respectively
  var passwordCharacters = [false, false, false, false];

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
    whichChars();
  }

}


//this function will establish an array of characters the user finds acceptable for their password
function createCharArray(boolArray) {

  //initialize each set of characters for each option a user could select
  var specialCharacters = "!@#$%^&*()_+=,./?";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";

  //initialize an empty string to be concatenated soon
  var passwordCharacters = "";

  //the following if statement looks through the array passed into this function
  //to see which characters to add into the passwordCharacters string
  //0 is for lowercase, 1 is for uppercase, 2 is for nums and 3 is for special chars
  if (boolArray[0]) {
    passwordCharacters = passwordCharacters.concat('', lowercase);
  }
  if (boolArray[1]) {
    passwordCharacters = passwordCharacters.concat('', uppercase);
  }
  if (boolArray[3]) {
    passwordCharacters = passwordCharacters.concat('', nums);
  }
  if (boolArray[4]) {
    passwordCharacters = passwordCharacters.concat('', specialCharacters);
  }

  //here we will return the passwordCharacters string, but with the split method
  //where we are splitting it up into each letter individually with no spaces
  //this also returns each of those characters in an array
  return passwordCharacters.split('');
}