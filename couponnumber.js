/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description: Coupon numbers Generator generate distinsct coupons to user
 *
 **/
//Variable Declaration
var arrayCoupon = [];
var numberSet = [];
var counter = 0;
/**
 *   Coupon function return range of coupon
 */
function coupon() {
  try {
    var number = Number(prompt("Please enter coupon range"));
    console.log(number);
  } catch (e) {
    console.log(e);
  }
  if (isNaN(number)) {
    document.write("error in input, enter valid number:</br>")
    return;
  }
  for (var i = 0; i < 9; i++) {
    numberSet[i] = -1;
  }
  for (var i = 0; i < number; i++) {
    couponNumber = randomCouponGenerator();
    arrayCoupon[i] = couponNumber;
  }
  /**
   *   randomCouponGenerator function generates one coupon at a time
   */
  function randomCouponGenerator() {
    var couponNumber = 0;
    var temp;
    for (var j = 0; j < 9; j++) {
      temp = Math.round(generateRandom(0, 9));
      if (temp == 0 && j == 0)
        temp = 1;
      couponNumber = temp + couponNumber * 10;
    }
    return couponNumber;
  }
  document.write("The Genererated couponNumber are:</br>")
  for (var i = 0; i < number; i++) {
    document.write(arrayCoupon[i]);
    document.write("</br>");
  }
  //  document.write("Total random needed:"+counter);

}
/**
 *   generateRandom function generates one random value
 */
function generateRandom(min, max) {
  counter++;
  return Math.random() * (max - min) + min;
}
