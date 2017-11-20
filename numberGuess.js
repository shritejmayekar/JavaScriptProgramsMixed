/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:guessNumber numbers by asking question to user
 *
 **/

//variables Declaration
var number;

/**
 * guessNumber function to ask question as well as logic to guessNumber
 * using binarySearch method
 */
function guessNumber() {
  var low = 0;
  var high = 50;
  var mid;
  var choice;
  while (true) {
    mid = Math.round((low + high) / 2);
    // computer 's guessing number condition
    if (low == mid) {
      return mid;
    }
    //ask question to user
    choice = prompt("Is your number is between y/Y " + low + " and " + mid);
    if (choice == 'y' || choice == 'Y') {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }

}
document.write(guessNumber());
