//Write Password function
function writePassword(){
    var password = null;
    var passwordLength = getPasswordLength();
    var isLowerCase = getLowerCaseOption();

    //Creating password
    password = "User selected " + password +  " letters, and lowercase = " + isLowerCase 
    // password = createPassword(passwordLength,isLowerCase);


    document.getElementById("password").value = password
}


//Get Password Length function
function getPasswordLength(){
    var passwordLength = prompt("How many letters in your password? (Choose between 10 and 128)");

    // need to catch cancel
    // passwordLength is passing previous value
if (passwordLength < 10 || passwordLength > 128){
    alert("Try Again (Choose between 10 and 128)")
    getPasswordLength();
} 
    return passwordLength;

}


// Get Password Lowercase Option
function getLowerCaseOption(){
    // How to get yes or no prompt
    var isLowerCase = confirm("Press OK if you want lower cases charactrs?)");

    return isLowerCase;
}

function createPassword(passwordLength,isLowerCase){
    var numbers = "0123456789";
    var lower = "abcdefghijklmnopqrstuvxz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVXZ";
    var special = "!@#$%^&*()"

    var chars = null
    if (isLowerCase) {chars += lower}

    var finalPassword = null;

    for (var i = 0; i <= passwordLength; i++){
        var randomcharacter = Math.floor(Math.random) * chars.length;
        finalPassword += chars.substring(randomcharacter, randomcharacter +1)

    }

    return finalPassword
}

//Clear Password function
function clearPassword(){
    var clrPassword = null;
    document.getElementById("password").value =  clrPassword
}


//add event listener for generate and clear buttons
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearPassword)
