var passLength = 0; //initial value
var passwordValue = []; //Array to hold true or false returns from user input
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ['"', '!', "#", "$", "%", "&", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];


function populatePassword() {

    passLength = prompt("Enter a number from 8 to 128 for the length of your password:");

    if ((passLength < 8) || (passLength > 128)) {
        alert("Please enter a number between 8 and 128");
    } else { //its an ok size... we can do all this stuff

        var passLow = confirm("Include lowercase letters?");
        var passUp = confirm("Include uppercase letters?");
        var passNum = confirm("Include Numbers?");
        var passSC = confirm("Include special characters?");

        // Pass a true or false value to pass value array
        if (passLow === true) {
            passwordValue = passwordValue.concat(lowercase);
        } else {
            !passwordValue[0];
        }
        if (passUp === true) {
            passwordValue = passwordValue.concat(upper);
        } else {
            !passwordValue[1];
        }
        if (passNum === true) {
            passwordValue = passwordValue.concat(number);
        } else {
            !passwordValue[2];
        }
        if (passSC === true) {
            passwordValue = passwordValue.concat(specialChar);
        } else {
            !passwordValue[3];
        }
        console.log(`Your ${passLength} character password includes: ${passwordValue}`);
        //set the password to the screen
        document.getElementById("password").innerHTML = randomPasswordString();

    }
}

function randomPasswordString() {

    var passwordChar = "";

    for (var i = 0; i < passLength; i++) {
        passwordChar += passwordValue[Math.floor(Math.random() * passwordValue.length)];
    }

    return passwordChar;

}