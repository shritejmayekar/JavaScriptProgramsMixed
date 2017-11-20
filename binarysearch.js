/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description: Binary search to find numbers in array
 *
 **/
//Declare variables
try {
  var number = prompt("Enter the value to search between 1 to 8 ");
} catch (e) {
  console.log(e);
} finally {

}

var arrray = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * binarysearch function to find number in array which is presorted array
 * using binarysearch method
 */

function binarySearch(array, number) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  while (low <= high) {
    mid = (low + high) / 2;
    mid = Math.round(mid);
    if (array[mid] == number) {
      return true;
    } else if (number > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

  }
  return false;
}
// check the number is valid or not
if (!isNaN(number)) {
  // call binarysearch method
  var result = binarySearch(arrray, number);
  // print the result
  console.log("result=" + result);
  document.write("The value Entered is present " + result);
} else {

  document.write("error Please enter the valid numbers:");

}
