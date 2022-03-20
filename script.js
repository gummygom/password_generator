// Assignment code here
const passChar = {
  lowercase: 'abcdefghijklmnopqrtsuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '1234567890',
  specialChar: '!@#$%^&*()_+-=[]{};:~`<>?/.,',
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var genPassword = "";

  var length = window.prompt("How long do you want your password to be? (between 8-128 characters)");

  var lowercase = window.confirm("Would you like to include lowercase letters?");
  if (lowercase) {
    genPassword += passChar.lowercase;
  };

  var uppercase = window.confirm("Would you like to include uppercase letters?");
  if (uppercase) {
    genPassword += passChar.uppercase;
  };

  var numeric = window.confirm("Would you like to include numbers?");
  if (numeric) {
    genPassword += passChar.numeric;
  };

  var specialChar = window.confirm("Would you like to include special characters?");
  if (specialChar) {
    genPassword += passChar.specialChar;
  };

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
