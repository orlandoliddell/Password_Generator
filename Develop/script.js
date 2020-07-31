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

var possibleValues = 

var uppercase = confirm("Would you ike uppercase characters?")
  if {
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    "abcdefghijklmnopqrstuvwxyz"
  }
var lowercase = confirm("Would you like lowercase characters?")
var numbers = confirm("Would you like numbers?")
var spchar = confirm("Would you like special characters?")
var characters = prompt("How many characters?")

var generatePassword = (uppercase === "true")