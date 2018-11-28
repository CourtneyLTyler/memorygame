
var cards = ["queen", "king", "queen", "king"];

// this will hold the cards that are in play
var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

if (cardsInPlay.length === 2) {
	// code to be exec if true
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// code to be exec if true
		alert("You found a match!");
	} else {
		// code otherwise
		alert("Sorry, try again!");
	}}
 else 
	// code otherwise
	alert("Flip another card");



