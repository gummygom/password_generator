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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
