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

  var passwordCharacters = "";
  console.log(passwordCharacters);
  if (hasLowercase) {
    passwordCharacters = passwordCharacters.concat('', lowercase);
    console.log(passwordCharacters);
  }
  if (hasUppercase) {
    passwordCharacters = passwordCharacters.concat('', uppercase);
    console.log(passwordCharacters);
  }
  if (hasNumbers) {
    passwordCharacters = passwordCharacters.concat('', nums);
    console.log(passwordCharacters);
  }
  if (hasSpecial) {
    passwordCharacters = passwordCharacters.concat('', specialCharacters);
    console.log(passwordCharacters);
  }

  var randoArray = passwordCharacters.split('');
  console.log(randoArray);
  var passArray = [];

  for (var i = 0; i < pwLength+1; i++) {
    passArray.push(randoArray[Math.random() * randoArray.length]);
  }

  console.log(passArray);
  var password = passArray.join('');
  console.log(password);
  return password;
}
