// Assignment Code
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperArray = lowerString.toUpperCase().split("");
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialArray = ["@", "#", "$"];
var generateBtn = document.querySelector("#generate");

function askUser(){
  var passLength = parseInt(prompt("How long would you like password to be?"));
  console.log(passLength); 
  //add if statement to check length of password
  if(passLength < 8 || passLength > 128 || isNaN(passLength)){
    alert("invalid num")
    return;
  }
  
  var yesLower = confirm("Would you like lower chars?");
  var yesUpper = confirm("Would like lower upper case?");
  var yesNumbers = confirm("Would you like nums?");
  var yesSpecial = confirm("Would you like special chars?");
  //make sure they've selected one type (if statement)
  var optionsObj = {
    passLength, 
    yesLower,
    yesUpper,
    yesNumbers,
    yesSpecial
  }
  return optionsObj;
}

function generatePassword() {
  var optionsAskUser = askUser();  
  var possibleChar = [];
  if (optionsAskUser === undefined) {
    alert("please try again")
    return;
  }
  if(optionsAskUser.yesLower){
    possibleChar = possibleChar.concat(lowerArray)
  }
  if(optionsAskUser.yesUpper){
    possibleChar = possibleChar.concat(upperArray)
  }
  if(optionsAskUser.yesNumbers){
    possibleChar = possibleChar.concat(numbersArray)
  }
  if(optionsAskUser.yesSpecial){
    possibleChar = possibleChar.concat(specialArray)
  }
  var results = [];
  for(let i = 0; i < optionsAskUser.passLength; i++){
    var index = Math.floor(Math.random()*possibleChar.length)
    var digit = possibleChar[index]
    results.push(digit)
  }
  return results.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== undefined) {
    // passwordText.value = "password failed"
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
