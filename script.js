var generateBtn = document.getElementById("generate");
var capCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", " \ ", "]", "^", "_", "`", "{", "|", "}", "~"];
var charset = capCase.concat(lowerCase, numbersList, specialCharacters);
var passLength;
//let test = parseInt(passLength)


//var passLength = document.getElementById("passLength").value;
//Before generating password, run this function to see if requirements are met.
function customPrompt() {
  //var passwordLength  = document.querySelector("#passLength");
  //passwordLength.innerHTML.value = newPasslength;

  var userInput = Prompt.render('Enter A Password To Encrypt:', 'generatePassword'); //popup called userInput
  if (userInput >= passLength) { //If the vlaue of userInput >= 8, then 
    generatePassword();
  }
}

// Run this function to create the encrypted password
/*function generatePassword() {
  var passwordString = "";
  console.log("reg", passLength)
  for (var i = 0; i < passLength; i++) {//don't let i exceed 8 characters which is password length
    var randomNumber = Math.floor(Math.random() * charset.length);
    passwordString += charset[randomNumber] //targets the charsets array to get the characters in a random order
  }
  return passwordString;
}
*/
//If Options are selected
function checkBoxes() {
  var caps = document.getElementById("check1").checked;
  var lower = document.getElementById("check2").checked;
  var num = document.getElementById("check3").checked;
  var charcters = document.getElementById("check4").checked;

  if (caps = true) {
    charset = lowerCase.concat(numbersList, specialCharacters).value;
    console.log(charset);
    console.log("passlength3", passLength)
  }

}

function promptContainer(passLength, userInput) {
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
    document.getElementById('dialogboxfoot').innerHTML = '<div class="checkbox-container"> Password Length: <input id="passLength" maxlength="2" size="2"><input  id="check1" type="checkbox" value="Caps"> Caps <input id="check2" type="checkbox" value="lowercase"> Lower <input id="check3" type="checkbox" value="Num"> Numbers <input id="check4" type="checkbox" value="Special"> Characters </div> <br><button class="button button1" onclick="Prompt.ok(\'' + func + '\')">OK</button> <button class="button button2" onclick="Prompt.cancel()">Cancel</button>';






    passLength = document.getElementById("passLength").value;
    console.log("passlength", passLength)

  }

  /* End of Styling prompt box */
  this.cancel = function () {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
  this.ok = function (func, passLength) {
    passLength = parseInt(document.getElementById("passLength").value);
    console.log("passlength2", passLength)
    var userInput = document.getElementById("userInput").value;
    //var newPasslength = document.getElementById("passLength").value;
    // Run this function to create the encrypted password

    let newPass = passLength
    function generatePassword(passLength) {
      var passwordString = "";
      console.log("reg", newPass)
      for (var i = 0; i < newPass; i++) {//don't let i exceed 8 characters which is password length
        var randomNumber = Math.floor(Math.random() * charset.length);
        passwordString += charset[randomNumber] //targets the charsets array to get the characters in a random order
      }
      return passwordString;
    }

    if (userInput.length >= newPass) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
      

      console.log("passlength4", passLength)
      exefunction();
    } else {
      alert("Please make sure your lenth is " + passLength + " characters long");
      console.log(passLength);
    }
  }
}


var Prompt = new promptContainer();


// Add event listener to generate button
generateBtn.addEventListener("click", promptContainer);
