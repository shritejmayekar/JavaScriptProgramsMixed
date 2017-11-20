/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:InsertionSort sort the elements of the array
 *
 **/
//Declare variables
var unSortedArray = [5, 43, 4, 6, 8, 1, 3, 2];

/**
 * insertionSort function sort the elements in the ascending oreder
 */
function insertionSort() {

  var elementToinsert;
  var position;
  for (var i = 1; i < unSortedArray.length; i++) {
    elementToinsert = unSortedArray[i];
    position = i;
    while (position > 0 && unSortedArray[position - 1] > elementToinsert) {
      unSortedArray[position] = unSortedArray[position - 1];
      position = position - 1;
    }
    unSortedArray[position] = elementToinsert;
  }

}
/**
 * show function displays all the array elements
 */
function show() {
  for (var i = 0; i < unSortedArray.length; i++) {
    console.log(unSortedArray[i]);
    document.write(" " + unSortedArray[i] + " ");
  }
}
