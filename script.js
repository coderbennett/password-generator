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

function generatePassword() {

  var pwLength = passwordLength();

  var selectedCharacters = whichChars();

  var randoArray = createCharArray(selectedCharacters);

  var passArray = [];

  for (var i = 0; i < pwLength+1; i++) {
    passArray.push(randoArray[Math.floor(Math.random() * (randoArray.length - 1))]);
  }

  var password = passArray.join('');
  password = password.slice(0,pwLength);
  return password;
}

function passwordLength() {
  var length;
  length = prompt("How long would you like your password to be? \n(Between 8-128 characters)");

  if(length < 8 || length > 128) {
    passwordLength();
  } 
  return length;
}

function whichChars() {

  var passwordCharacters = [false, false, false, false];

  passwordCharacters[0] = confirm("Do you want lowercase letters in your password?");
  passwordCharacters[1] = confirm("Do you want uppercase letters in your password?");
  passwordCharacters[2] = confirm("Do you want numbers in your password?");
  passwordCharacters[3] = confirm("Do you want special characters in your password?");

  if (!passwordCharacters.includes(true)) {
    alert("You must have at least one type of character set for your password to generate.\nPlease try again.");
    whichChars();
  }

}

function createCharArray(boolArray) {

  var specialCharacters = "!@#$%^&*()_+=,./?";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var passwordCharacters = "";

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

  return passwordCharacters.split('');
}