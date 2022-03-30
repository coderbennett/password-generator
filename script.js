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
  
  var specialCharacters = "!@#$%^&*()_+=,./?";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var hasLowercase, hasUppercase, hasNumbers, hasSpecial = false;

  var pwLength = passwordLength();

  while (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
      hasLowercase = confirm("Do you want lowercase letters in your password?");
      hasUppercase = confirm("Do you want uppercase letters in your password?");
      hasNumbers = confirm("Do you want numbers in your password?");
      hasSpecial = confirm("Do you want special characters in your password?");

    if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
      alert("You must have at least one type of character set for your password to generate.\nPlease try again.");
    }
  }

  var passwordCharacters = "";

  if (hasLowercase) {
    passwordCharacters = passwordCharacters.concat('', lowercase);
  }
  if (hasUppercase) {
    passwordCharacters = passwordCharacters.concat('', uppercase);
  }
  if (hasNumbers) {
    passwordCharacters = passwordCharacters.concat('', nums);
  }
  if (hasSpecial) {
    passwordCharacters = passwordCharacters.concat('', specialCharacters);
  }

  var randoArray = passwordCharacters.split('');
  var passArray = [];

  for (var i = 0; i < pwLength+1; i++) {
    passArray.push(randoArray[Math.floor(Math.random() * (randoArray.length - 1))]);
  }

  var password = passArray.join('');
  password = password.slice(0,pwLength);
  return password;
}

function passwordLength(){
  var length;
  length = prompt("How long would you like your password to be? \n(Between 8-128 characters)");

  if(length < 8 || length > 128) {
    passwordLength();
  } 
  return length;
}