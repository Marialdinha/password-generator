//Write Password function
function writePassword() {
  
  // Get password length
  let passLength = prompt(
    "How many letters in your password? (Choose between 8 and 128)"
  );
   
  if (passLength != null) { // <--Checking if user did not click cancel
    if (passLength < 8 || passLength > 128) { // <--Checking if lenght is withn parameters
      alert("Try Again (Choose between 8 and 128)");
      writePassword();
    } else if (passLength != null) { // <--Checking if user did not click cancel
        var isLowerCase = confirm("Press OK if you want lowercase characters in your password");
        var isUpperCase = confirm("Press OK if you want uppercase characters in your password");
        var isNumeric = confirm("Press OK if you want numbers in your password");
        var isSpecialCharacter = confirm("Press OK if you want special characters in your password");

        //Creating password
        let password = createPassword(passLength, isLowerCase, isUpperCase,isNumeric,isSpecialCharacter);
        //Writing password in the text area
        document.getElementById("password").value = password;
    }
  }
}

// Ceate Password Function
function createPassword(passwordLength, isLowerCase, isUpperCase,isNumeric,isSpecialCharacter) {
  var numbers = "0123456789";
  var lower = "abcdefghijklmnopqrstuvxz"; 
  var upper = "ABCDEFGHIJKLMNOPQRSTUVXZ";
  var special = "!@#$%^&*()";
  var chars = "";
  var finalPassword = "";
  var isThereASelection = false;

  // Constructing chars variable accordingly to choosen options
  if (isLowerCase) {
      chars += lower;
      isThereASelection = true;}
  if (isUpperCase) {
      chars += upper;
      isThereASelection = true;}
  if (isNumeric) {
      chars += numbers;
      isThereASelection = true;}
  if (isSpecialCharacter) {
      chars += special;
      isThereASelection = true;}

  if (isThereASelection) { // <- checking if user selected any character type
     // For loop to create a random password
     for (var i = 0; i <= passwordLength - 1; i++) {
         var randomcharacter = Math.floor(Math.random() * chars.length);
         finalPassword += chars.substring(randomcharacter, randomcharacter + 1);
        }
      return finalPassword;
      } else{
        return "My dear, you did not select any character type to be included in your password.\nHow can I create a password for you?\nI am a computer not a magician.";
      }
  
}

//Clear Password function
function clearPassword() {
  var clrPassword = null;
  document.getElementById("password").value = clrPassword;
}

//add event listener for generate, clear and copy buttons
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearPassword);

