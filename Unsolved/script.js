// Assignment Code
console.log("hey");
var generateBtn = document.querySelector("#generate");
var criteriaArray = [];
var lowerCaseArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericArray=["1","2","3","4","5","6","7","8","9","0"];
var specialCharArray=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var passwordString="";
var passwordCriteria = null;

function validateUserInputs(){
  while (passwordCriteria.hasSpecialChar == false && passwordCriteria.hasUpperCaseChar == false && passwordCriteria.hasLowerCaseChar == false && passwordCriteria.hasNumberChar == false) {
    alert("Please select one type of character");
    passwordCriteria.hasLowerCaseChar=confirm("Do you want to include lowercase characters?");
    passwordCriteria.hasUpperCaseChar=confirm("Do you want to include uppercase characters?");
    passwordCriteria.hasNumberChar=confirm("Do you want to include numeric characters?");
    passwordCriteria.hasSpecialChar=confirm("Do you want to include special characters?");
  }
}

function getPasswordCriteria(){

  var hasLowerCase=confirm("Do you want to include lowercase characters?");
  var hasUpperCase=confirm("Do you want to include uppercase characters?");
  var hasNumeric=confirm("Do you want to include numeric characters?");
  var hasSpecial=confirm("Do you want to include special characters?");
  var length = parseInt(prompt("How many characters do you want the password to be?"));

 passwordCriteria = {
  length: parseInt(length),
  hasSpecialChar: hasSpecial,
  hasUpperCaseChar: hasUpperCase,
  hasLowerCaseChar: hasLowerCase,
  hasNumberChar: hasNumeric
}
validateUserInputs(passwordCriteria);
return passwordCriteria;
}



function generatePassword(){
 var passwordCriteria =  getPasswordCriteria();
 if (passwordCriteria.hasLowerCaseChar==true){
  criteriaArray.push(lowerCaseArray);
}
if (passwordCriteria.hasUpperCaseChar==true){
  criteriaArray.push(upperCaseArray)
}
if (passwordCriteria.hasNumberChar==true){
  criteriaArray.push(numericArray)
}
if (passwordCriteria.hasSpecialChar==true){
  criteriaArray.push(specialCharArray)
}
for(let i=0;i<passwordCriteria.length;i++){
randomSelectedCriteriaArrayIndex = parseInt(Math.floor(Math.random()*criteriaArray.length));
randomSelectedCriteriaArrayGroup = criteriaArray[randomSelectedCriteriaArrayIndex];
randomSelectedElementIndex = parseInt(Math.floor(Math.random()*randomSelectedCriteriaArrayGroup.length))
randomSelectedElement = randomSelectedCriteriaArrayGroup[randomSelectedElementIndex];
passwordString += randomSelectedElement;
}
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordString)
  passwordText.value = passwordString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
