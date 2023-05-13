//Write Password function
function writePassword(){
    var password = getPasswordLength();

    //Creating password
    password = "User selected " + password + " letters"

    document.getElementById("password").value = password
}

//Get Password Length function
function getPasswordLength(){
    var passwordLength = prompt("How many letters in your password? (Choose between 10 and 128)");

if (passwordLength < 10 || passwordLength > 128) {
    alert("Try Again")
    getPasswordLength();
} 
    return passwordLength;

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












//writePassword();

// Show password in text area
// all samples below work 
// document.getElementById("password").value = "Test";
// document.querySelector("#password").value = "Test2222222";
//document.querySelector("textarea").value = "Test33333333";

