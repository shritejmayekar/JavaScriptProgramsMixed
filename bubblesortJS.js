/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description: Binary search to find numbers in array
 *
 **/
//Declaration variables
var unSortedArray = [];

/**
 *   readArray function read values from the user
 */
function readArray() {
  var number = prompt("Enter no. of elements to insert:")
  for (var i = 0; i < number; i++) {
    unSortedArray.push(prompt("Enter the number:"));
  }
}
// sorted to store elements
var sortedArray = [];

function bubbleSort() {
  var tempVar;
  for (var i = 0; i < unSortedArray.length; i++) {
    for (var j = i + 1; j < unSortedArray.length; j++) {
      if (unSortedArray[i] > unSortedArray[j]) {
        tempVar = unSortedArray[i];
        unSortedArray[i] = unSortedArray[j];
        unSortedArray[j] = tempVar;
      }
    }
    // storing sorted values
    sortedArray[i] = unSortedArray[i];
  }

}
/**
 * show function to list all the sorted elements
 */
function show() {
  for (var i = 0; i < unSortedArray.length; i++) {
    console.log(unSortedArray[i]);
    document.write(" " + unSortedArray[i] + " ");
  }
}
