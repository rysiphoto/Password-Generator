
var passwordValue = [];
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
  passwordValue.push(passLow);
  console.log("lowercase letters");
} else {
  passwordValue[0] === false;
}
if (passUp === true) {
  passwordValue.push(passUp);
  console.log("uppercase letters");
} else {
  passwordValue[1] === false;
}
if (passNum === true) {
  passwordValue.push(passNum);
  console.log("numbers");
} else {
  passwordValue[2] === false;
}
if (passSC === true) {
  passwordValue.push(passSC);
  console.log("special characters");
} else {
  passwordValue[3] === false;
}
console.log(`Your ${passLength} character password includes: ${passwordValue}`)

var passArr = [];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ['"', '!', "#", "$", "%", "&", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

if (passwordValue[0] === true) {
  passArr.push(lowercase);
}
if (passwordValue[1] === true) {
  passArr.push(upper);
}
if (passwordValue[2] === true) {
  passArr.push(number);
}
if (passwordValue[3] === true) {
  passArr.push(specialChar);
}
console.log(passArr);

function generatePassword(passArr, passLength) {
  var password = "";
  for (var i = 0; i < passLength; i++)
    password += passArr.length;
  console.log(password);
  return password;
}


var generateBtn = document.querySelector("#generate");

