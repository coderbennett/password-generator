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
  var uppercase = lowercase.toLocaleUpperCase;
  var nums = "0123456789";
  var pwLength = 0;
  var hasLowercase, hasUppercase, hasNumbers, hasSpecial = false;

  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("How long should your password be? \n(Between 8-128 characters)");
  }

  while (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
      hasLowercase = confirm("Do you want lowercase letters in your password?");
      hasUppercase = confirm("Do you want uppercase letters in your password?");
      hasNumbers = confirm("Do you want numbers in your password?");
      hasSpecial = confirm("Do you want special characters in your password?");

    if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
      alert("You must have at least one type of character set for your password to generate.\nPlease try again.");
    }
  }

  var password = "";
  if (hasLowercase) {
    password = password.concat(lowercase);
  }
  if (hasUppercase) {
    password = password.concat(uppercase);
  }
  if (hasNumbers) {
    password = password.concat(nums);
  }
  if (hasSpecial) {
    password = password.concat(specialCharacters);
  }

  
}
