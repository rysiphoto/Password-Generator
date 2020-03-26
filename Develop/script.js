



var generateBtn = document.querySelector("#generate");
var password = "";
var passDB = [];
var passLength = prompt("Enter a number from 8 to 128 for the length of your password:");
console.log(passLength);
var passLow = confirm("Include lowercase letters?");
console.log(passLow);
var passUp = confirm("Include uppercase letters?");
console.log(passUp);
var passNum = confirm("Include Numbers?");
console.log(passNum);
var passSC = confirm("Include special characters?");
console.log(passSC);
var passOptions;
if (passLow === true) {
  passDB.push(passLow);
  console.log("lowercase letters");
} else {
  passDB[0] = false;
}
if (passUp === true) {
  passDB.push(passUp);
  console.log("uppercase letters");
} else {
  passDB[1] = false;
}
if (passNum === true) {
  passDB.push(passNum);
  console.log("numbers");
} else {
  passDB[2] = false;
}
if (passSC === true) {
  passDB.push(passSC);
  console.log("special characters");
} else {
  passDB[3] = false;
}
console.log(`Your ${passLength} character password includes: ${passDB}`)

{
  var passLInfoLowDB = ['a', 'b', 'c', 'd', 'e', 'f', ghijklmnopqrstuvwxyz"];
  var passInfoUpDB = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var passInfoNumDB = ["0123456789"];
  var passInfoCharDB = ['"', '!', '\', "#", "$", "%", "&", "'", '(', ')', '*', 
  '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`',
    '{', '|', '}', '~'];
}

Math.floor(Math.random() * 10)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and / or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page