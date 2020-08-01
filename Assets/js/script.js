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

var charVal
var possVal = []
var password1 = []
var upVal =
  ['A', "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowVal =
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numVal =
  ['0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9']
var spVal =
  ['!', '#', '$', '%', '&', '(', "'", ')', '*',
    '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?',
    '@', '[', ']', '^', '_', '{', '|', '}', '~']



function generatePassword() {
  possVal = [];
  password1 = [];
  
  charVal = parseInt(prompt("How many characters?")) 
  if(charVal<8 || charVal>128){
    alert("Please chose a number between 8 and 128")
    return generatePassword()
  }

  if (confirm("Would you ike uppercase characters?")) {
    possVal.push(upVal)
  }

  if (confirm("Would you like lowercase characters?")) {
    possVal.push(lowVal)
  }

  if (confirm("Would you like numbers?")) {
    possVal.push(numVal)
  }

  if (confirm("Would you like special characters?")) {
    possVal.push(spVal)
  } console.log(possVal)

  for (var i = 0; i < charVal; i++) {
    var randomVAL = Math.floor(Math.random() * possVal.length)
    var rdmPassVal = Math.floor(Math.random() * possVal[randomVAL].length)
    console.log("here " + possVal[randomVAL])
    var pass = possVal[randomVAL][rdmPassVal]
    password1.push(pass)

    console.log(randomVAL, rdmPassVal, pass)
  }
  console.log(`password ${password1.join("")}`)
  return password1.join("")
}