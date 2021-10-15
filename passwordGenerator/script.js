var generateButtonEl = document.querySelector("#button");
var passwordTextArealEl = document.querySelector("#password-text")
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];


var getUserInputs = function(){
    var length = parseInt(prompt("please enter the length of the password", "8"));
    if(length < 8 || Number.isNaN(length) || length > 128){
        alert ("entered length is either invalid number or less that 8 or greater than 128")
        return;    // break out of the program flow. And user has to start the process again.
    }

    
    var hasSpecialChars = confirm("should there be special chars?");
    var hasLowerChars = confirm("should there be lower chars?");
    var hasUpperChars = confirm("should there be upper chars?");
    var hasNumbers = confirm("should there be numbers?");
    if(hasLowerChars === false && hasNumbers === false && hasUpperChars === false && hasSpecialChars === false){
        alert ("Must enter atleast one type of characters");
        return
    }
    return {
        length: length,
        hasLowerChars: hasLowerChars,
        hasSpecialChars: hasSpecialChars,
        hasUpperChars: hasUpperChars,
        hasNumbers: hasNumbers
    }
}

var getRandom = function(arr){
    var randomIndex =  Math.floor(Math.random() * arr.length)
    return arr[randomIndex];
}

var generatePassword = function(){
var passwordText = '';
var res = []
var validCharaters = [];
var guarenteedCharacters = [];
var userInputs = getUserInputs(); 

if (userInputs.hasLowerChars) {
    validCharaters =  validCharaters.concat(lowerCasedCharacters);
    guarenteedCharacters.push(getRandom(lowerCasedCharacters));
}
if (userInputs.hasNumbers) {
    validCharaters = validCharaters.concat(numericCharacters);
    guarenteedCharacters.push(getRandom(numericCharacters));
}
if (userInputs.hasUpperChars) {
    validCharaters = validCharaters.concat(upperCasedCharacters);
    guarenteedCharacters.push(getRandom(upperCasedCharacters));
}
if (userInputs.hasSpecialChars) {
    validCharaters = validCharaters.concat(upperCasedCharacters);
    guarenteedCharacters.push(getRandom(specialCharacters))
}
for(var i = 0; i < userInputs.length; i ++){
res.push(getRandom(validCharaters));
}

for(var i = 0; i < guarenteedCharacters.length; i ++){
    res[i] = guarenteedCharacters[i];
}

return res.join('');
}

var writePassword = function(){
   var password =  generatePassword();
   passwordTextArealEl.value = password;
}





generateButtonEl.addEventListener("click", writePassword);