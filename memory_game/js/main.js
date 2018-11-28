
var cards = ["queen", "king", "queen", "king"];

// this will hold the cards that are in play
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
	// code to be exec if true
	checkForMatch();
 } else {
	// code otherwise
	alert("Flip another card");
}
};

flipCard(0);
flipCard(1);





// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

// var cardId = cardsInPlay.length-1;




// console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);






