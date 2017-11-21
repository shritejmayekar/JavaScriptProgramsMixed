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
  firstWord = firstWord.toLowerCase(firstWord.replace(/\s/g, ""));
  secondWord = secondWord.toLowerCase(secondWord.replace(/\s/g, ""));
  var firstWordCharArray = firstWord.split("");
  var secondWordCharArray = secondWord.split("");

  firstWordCharArray = sortedArray(firstWordCharArray);
  secondWordCharArray = sortedArray(secondWordCharArray);
  if (firstWordCharArray.length != secondWordCharArray.length)
    return false;

  for (var i = 0; i < firstWordCharArray.length; i++) {
    if (firstWordCharArray[i] != secondWordCharArray[i]) {
      return false;
    }
  }
  return true;
}
/**
 * sort the characters
 */

function sortedArray(arrayString) {
  var tempVar;
  for (var i = 0; i < arrayString.length; i++) {
    for (var j = i + 1; j < arrayString.length; j++) {
      if (arrayString[i] > arrayString[j]) {
        tempVar = arrayString[i];
        arrayString[i] = arrayString[j];
        arrayString[j] = tempVar;
      }
    }
  }
  for (var i = 0; i < arrayString.length; i++) {
    console.log(arrayString[i]);
  }
  return arrayString;
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
