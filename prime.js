/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:prime number Generator generate numbers 1 to N prime number.
 *
 **/
//Declare variables
var number;
var primeArray = [];
var counter = 0;
/**
 * primeNumber function ask range from user
 */
function primeNumber() {
  number = prompt("Please enter prime number range 1 to  N");
  primeNumberGenerator();

}
/**
 * primeNumberGenerator function generates prime number from 1 to N
 */
function primeNumberGenerator() {
  //  Generate Prime numbers
  for (var i = 0; i < number; i++) {
    if (isPrime(i)) {
      primeArray[counter++] = i;
    }
  }
  //Prints Prime Number
  for (var i = 0; i < primeArray.length; i++) {
    document.write("<h3>" + primeArray[i] + "</h3>");
    console.log(primeArray[i]);
  }

}
/**
 * isPrime function checks the input number is prime or not
 */
function isPrime(num) {
  count = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0)
      count++;
  }
  //prime number Success condition
  if (count == 2)
    return true;
  else
    return false;
}
