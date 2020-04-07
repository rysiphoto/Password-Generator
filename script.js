// var generateBtn = document.querySelector("#generate");
var passwordValue = []; //Array to hold true or false returns from user input
var passLength = prompt("Enter a number from 8 to 128 for the length of your password:");
if (passLength < 8) {
  alert("Please enter a number between 8 and 128");
} if (passLength > 128) {
  alert("Please enter a number between 8 and 128");
} else {
  alert("Please enter a number.");
}

console.log(passLength);
var passLow = confirm("Include lowercase letters?");
console.log(passLow);
var passUp = confirm("Include uppercase letters?");
console.log(passUp);
var passNum = confirm("Include Numbers?");
console.log(passNum);
var passSC = confirm("Include special characters?");
console.log(passSC);
// Pass a true or false value to pass value array
if (passLow === true) {
  passwordValue.push(passLow);
  console.log("lowercase letters");
} else {
  !passwordValue[0];
}
if (passUp === true) {
  passwordValue.push(passUp);
  console.log("uppercase letters");
} else {
  !passwordValue[1];
}
if (passNum === true) {
  passwordValue.push(passNum);
  console.log("numbers");
} else {
  !passwordValue[2];
}
if (passSC === true) {
  passwordValue.push(passSC);
  console.log("special characters");
} else {
  !passwordValue[3];
}
console.log(`Your ${passLength} character password includes: ${passwordValue}`)

const passArr = []; //array to include any chosen password options
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



console.log(passArr); //to log all characters going into random password

for (var i = 0; i < (passArr.length) * parseInt.passLength; i++) {

  console.log(passArr[i]);
  // var password = passArr[math.floor(math.random() * passArr.length)];
  // console.log(password);
}
// function writePassword() {
//   for (var i = 0; i < passLength; i++)
//     var password = passArr[Math.floor(Math.random(passLength) * passArr.length)];
//   console.log(password);
// for (var i = 0; i < passArr.length; i++) {
// console.log(passArr[i]);
// }
// var writePassword = passArr[Math.floor((Math.random(passLength) * 10) * passArr.length)];
// console.log(writePassword);
// // function to jumble selected array options
// generateBtn.addEventListener("click", writePassword); {

//   return password;
// }



