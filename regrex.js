/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:Regex checker and replace the given content with user
 *
 **/
 //Declare variables
var name = prompt("Enter your name:");
var fullName = prompt("Enter your full name:");
var mobile = prompt("Enter the mobile number:");


/**
* changeText function to change content of paragraph
*/
function changeText() {
  var string = document.getElementById('paragraph').innerHTML;
  var text = string.replace("name", name).replace("full name", fullName);
  var date = new Date();
  text = text.replace("xxxxxxxxxx", mobile).replace("01/01/2016", date);
  document.getElementById('paragraph').innerHTML = text;

}
