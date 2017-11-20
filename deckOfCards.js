/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:Distributes 9 deckOfCards to Player
 *
 **/
//Declare variables
var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];


var cards = [
  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"],
  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"],
  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"],
  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
];

/**
 *   generateRandom function generates one random value
 */
function generateRandom(min, max) {

  return Math.random() * (max - min) + min;
}
/**
 * getCards function generates one random card at a time
 */
function getCards() {
  // for suits
  row = Math.round(generateRandom(0, 3));
  // for rank of cards
  column = Math.round(generateRandom(0, 12));
  if (cards[row][column] == "#") {
    getCards();
  } else {
    document.write(" {" + suit[row] + ":" + rank[column] + "}");
    cards[row][column] = "#";
  }
}
/**
* generateCard function will give 9 random cards to person
*/
function generateCard() {
  for (var i = 0; i < 9; i++) {
    getCards();
  }
}
document.write('<h1>Deck Of Cards</h1>');
for (var i = 0; i < 4; i++) {
  document.write("<br>Player " + (i + 1) + "<br>");
  generateCard();

}
