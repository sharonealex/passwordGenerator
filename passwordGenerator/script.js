var generateButton = document.querySelector("button");

console.log(generateButton)






var writePassword = function(){
    console.log("line 11")
var passwordOutput = document.querySelector("#password-text");
console.log(passwordOutput)
//var password = generatePassword();
passwordOutput.value = "test"
}


generateButton.addEventListener("click", writePassword);
