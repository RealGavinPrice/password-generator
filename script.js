// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

/////////////////////////////
/////////////////////////////
  // MY STUFF HERE:
 
function generatePassword() {
// PASSWORD LENGTH:  
  var passLength = window.prompt("Please choose a password length:");
if (passLength < 8) {
    window.alert("It is not secure to choose a password less than 8 characters.");
    window.prompt("Please choose a password length greater than 8 characters");
} 
    else
    if (passLength >= 128) {
        window.prompt("Please choose a password length greater than 8 and less than 128 characters.");
};

//PROMP FOR CASE:
  var passUpper = window.confirm("Would you like to include upper case characters?");
if (!passUpper){
    charsetUpper = "abcdefghijklmnopqrstuvwxyz";
} 
    else 
    if (passUpper === true){
        charsetUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
};

//PROMPT FOR NUMBER:
var passNum = window.confirm("Would you like to include numeric characters?");
if (!passNum){
    charsetNum = "";
}
    else 
    if (passNum === true){
        charsetNum = "0123456789";
}

//PROMPT FOR SPECIAL CHARACTERS: 
var passSpecial = window.confirm("Would you like to include special characters (e.g. { + @ % > , etc.)?");     
   
if (!passSpecial){
    charsetSpecial = "";
}
    else 
    if (passSpecial === true){
        charsetSpecial = "!@#$%^&*()_+=-[]{}|;:<>,./?";
}

var charsetFinal = (charsetSpecial + charsetUpper + charsetNum);


//FOR LOOP SETUP:
  var length = passLength,
      charset = charsetFinal,
      passVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      passVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return passVal;
}
 
  //END OF MY STUFF
/////////////////////////////
/////////////////////////////



function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
