function generatePassword() {
    var passwordLength = prompt("Enter required password length (8 - 128 characters")

    if (passwordLength < 8 || passwordLength > 128){
        alert("Enter a valid password length!");
        return false;
    }

    var useUppercase = confirm("Do you want to include uppercase letters?");
    var useLowercase = confirm("Do you want to include lowercase letters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSpecial = confirm("Do you want to include special characters?");

    if (useUppercase === false && useLowercase === false && useNumbers === false && useSpecial === false) {
        alert("Please include at least one character set in your password!");
        return false;
    }

    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "<", ">", ",", ">", "?", "'"];

    var finalSet = [];
    var password = "";

    if (useUppercase) {
        uppercase.forEach(addToFinalSet);
    }

    if (useLowercase) {
        lowercase.forEach(addToFinalSet);
    }

    if (useNumbers) {
        numbers.forEach(addToFinalSet);
    }

    if (useSpecial) {
        special.forEach(addToFinalSet);
    }

    function addToFinalSet(value, index, array) {
        finalSet.push(value);
    }

    for(var i = 0; i < passwordLength; i++) {
        var rand = Math.floor(Math.random() * finalSet.length);
        password = password + finalSet[rand];
    }
    document.getElementById("Password").innerHTML = password;
    document.getElementById("Password").style.visibility = "visible";
}

function copyToClipboard() {
    
}