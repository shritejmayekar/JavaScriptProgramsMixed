/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description: Anagram Detection Program takes two arguments and check whether
 *  the firstWord is rearrangement of secondWord.
 **/
/**
 * Declare variables
 */
var firstWord = prompt("Enter first word");
var secondWord = prompt("Enter second word");
/**
 *   isAnagram function checks the firstWord rearrangement equals to secondWord
 *   or not
 *
 */
function isAnagram() {
  var counter = 0;
  firstWord = firstWord.toLowerCase(firstWord.replace(/\s /g, ""));
  secondWord = secondWord.toLowerCase(secondWord.replace(/\s /g, ""));

  if (firstWord.length != secondWord.length)
    return false;
  else {
    for (var i = 0; i < firstWord.length; i++) {
      for (var j = 0; j < firstWord.length; j++) {
        if (firstWord.charAt(i) == secondWord.charAt(j)) {
          document.write(firstWord.charAt(i) + " " + secondWord.charAt(j) +
            "</br>")
          counter++;
          //firstWord=secondWord.replace(firstWord.charAt(i),'$')
          secondWord = secondWord.replace(secondWord.charAt(j), '#');
        }
      }
    }
  }
  document.write(counter);
  if (counter == firstWord.length)
    return true;
  else
    return false;
}
//call angram function
var result = isAnagram();
//If true then anagram
if (result)
  document.write("<h1 style='color:blue'>" + "Entered is Anagram" + "</h1>")
else
  document.write("<h1 style='color:red'>" + "Entered is not Anagram" +
    "</h1>")

console.log(result);
