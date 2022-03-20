var generateBtn = document.querySelector("#generate");

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
  var password = "";

  // create prompts for password length
  var length = window.prompt("How long do you want your password to be? (between 8-128 characters)");
  if (length < 8) {
    alert("Password must have at least 8 characters!");
    return "";
  }
  if (length > 128) {
    alert("Password cannot contain more than 128 characters!");
    return "";
  }

  // create prompts for lowercase
  var lowercase = window.confirm("Would you like to include lowercase letters?");
  if (lowercase) {
    genPassword += passChar.lowercase;
  };

  // create prompts for uppercase
  var uppercase = window.confirm("Would you like to include uppercase letters?");
  if (uppercase) {
    genPassword += passChar.uppercase;
  };

  // create prompts for numbers
  var numeric = window.confirm("Would you like to include numbers?");
  if (numeric) {
    genPassword += passChar.numeric;
  };

  // create prompts for symbols
  var specialChar = window.confirm("Would you like to include special characters?");
  if (specialChar) {
    genPassword += passChar.specialChar;
  };

  
  for (let i = 0; i < length; i++) {
    password += genPassword[Math.floor(Math.random() * genPassword.length)]
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


