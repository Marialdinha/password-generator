//Write Password function

function writePassword() {
    
  let passLength = prompt(
    "How many letters in your password? (Choose between 10 and 128)"
  );

  if (passLength != null) {
    if (passLength < 10 || passLength > 128) {
      alert("Try Again (Choose between 10 and 128)");
      writePassword();
    } else if (passLength != null) {
        var isLowerCase = getLowerCaseOption();
        var isUpperCase = getUpperCaseOption();

        //Creating password
        let password = createPassword(passLength, isLowerCase, isUpperCase);

        document.getElementById("password").value = password;
    }
  }
}

// Get Password Lowercase Option
function getLowerCaseOption() {
  var isLowerCase = confirm("Press OK if you want lowercase charactrs?)");

  return isLowerCase;
}

// Get Password Uppercase Option
function getUpperCaseOption() {
    var isUpperCase = confirm("Press OK if you want uppercase charactrs?)");
  
    return isUpperCase;
  }

// Ceate Password Function
function createPassword(passwordLength, isLowerCase, isUpperCase) {
  var numbers = "0123456789";
  var lower = "abcdefghijklmnopqrstuvxz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVXZ";
  var special = "!@#$%^&*()";
  var chars = "";
  var finalPassword = "";

  // Constructing chars variable accordingly to choosen options
  if (isLowerCase) {chars += lower;}
  if (isUpperCase) {chars += upper;}

  // For loop to create a random variable
  for (var i = 0; i <= passwordLength - 1; i++) {
    var randomcharacter = Math.floor(Math.random() * chars.length);
    finalPassword += chars.substring(randomcharacter, randomcharacter + 1);
  }
  return finalPassword;
}

//Clear Password function
function clearPassword() {
  var clrPassword = null;
  document.getElementById("password").value = clrPassword;
}

//Copy function
function copyPassword() {
  var copiedPassword = null;
  document.getElementById("password").value =
    "Youe copied password is = " + copiedPassword;
}

//add event listener for generate, clear and copy buttons
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearPassword);

var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);
