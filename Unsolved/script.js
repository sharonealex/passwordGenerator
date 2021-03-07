// Assignment Code
var generateBtn = document.querySelector("#generate");

//to check for user values
function isTrue(str){
  return (str === "Y" || str === "y");
}

function getPasswordCriteria(){
//get user input criteria
var  length = prompt("Enter length of password");
var specialChar = prompt("To include special chars; Enter Y");
var upperCase =  prompt("To include uppercase chars; Enter Y");
var number = prompt("To include number; Enter Y");

//save criteria object
 passwordCriteria = {
  length: length,
  hasSpecialChar: isTrue(specialChar),
  hasUpperCaseChar: isTrue(upperCase),
  hasNumberChar: isTrue(number)
}
return passwordCriteria;
}

function generatePassword(){
 var passwordCriteria =  getPasswordCriteria();


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
