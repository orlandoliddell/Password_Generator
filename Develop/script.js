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

var possibleValues = ""

var uppercase = confirm("Would you ike uppercase characters?") 
  if (uppercase === true) {
    possibleValues = possibleValues + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(possibleValues);
  } else {

    console.log(uppercase)
  }

var lowercase = confirm("Would you like lowercase characters?")
  if (lowercase === true) {
    possibleValues = possibleValues + "abcdefghijklmnopqrstuvwxyz";
    console.log(possibleValues)
  }else {
  }

var numbers = confirm("Would you like numbers?")
  if (numbers === true) {
    possibleValues = possibleValues + "0123456789"
    console.log(possibleValues)
  }else {

  }
var spchar = confirm("Would you like special characters?")
  if (spchar === true) {
    possibleValues = possibleValues + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    console.log(possibleValues)
  }
var characters = prompt("How many characters?")

var generatePassword 