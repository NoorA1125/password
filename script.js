// Assignment Code
var generateBtn = document.getElementById("generate");
var passwordLength = document.getElementById("passLength");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var capCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersList = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var userInput = "";
//charset = lowerCase.concat(capCase,numbersList,specialCharacters);
//var userInput = Prompt.render('Enter A Password To Encrypt:','changeText');
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Before generating password, run this function to see if requirements are met.
function customPrompt() {
  userInput = Prompt.render('Enter A Password To Encrypt:', 'generatePassword'); //popup called userInput
  if (userInput >= passwordLength.length) { //If the vlaue of userInout >= 8, then 
    generatePassword();
  }
}

// Run this function to create the encrypted password
function generatePassword() {
  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {//don't let i exceed 8 characters which is password length
    var randomNumber = Math.floor(Math.random() * charset.length);
    passwordString += charset[randomNumber] //targets the charsets array to get the characters in a random order
  }
  return passwordString;
}

function promptContainer() {
  this.render = function (dialog, func) {
    /*Sizing width container */
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    /* Practice of Style in CSS for the divs (head,body,foot */
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    dialogbox.style.top = "200px";
    dialogbox.style.display = "block";
    /* End of style for divs */
    /*HTML modification to the values of the divs [head,body,foot] */
    document.getElementById('dialogboxhead').innerHTML = "A value is required";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxbody').innerHTML += '<br><input id="userInput">';
    document.getElementById('dialogboxfoot').innerHTML = '<div class="checkbox-container"> Password Length: <input id="passLength" maxlength="2" size="2"><input type="checkbox" value="Caps"> Caps <input type="checkbox" value="lowercase"> Lower <input type="checkbox" value="Num"> Numbers <input type="checkbox" value="Special"> Characters </div> <br><button class="button button1" onclick="Prompt.ok(\'' + func + '\')">OK</button> <button class="button button2" onclick="Prompt.cancel()">Cancel</button>';
  }
  /* End of Styling prompt box */
  this.cancel = function () {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
  this.ok = function (func) {
    var userInput = document.getElementById("userInput").value;
    if (userInput.length >= passwordLength.length) {
      var password = generatePassword();
      var passwordText = document.getElementById("password");
      passwordText.value = password;
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    } else {
      alert("Please make sure your lenth is 8 characters long");
    }
  }
}
var Prompt = new promptContainer();

// Add event listener to generate button
generateBtn.addEventListener("click", promptContainer);
