
// create object with each card's properties
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

// create empty array to hold the cards while they are in play
var cardsInPlay = [];

// create fx to check if the cardsInPlay elements match and notify user
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

// create fx to be executed once a card is clicked
var flipCard = function() {
	// give the current card an ID and assign to a var
	var cardId = this.getAttribute("data-id");
	// add the rank of the current card to the cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	// add the cardImage for the current card
	this.setAttribute("src", cards[cardId].cardImage);
	// run checkForMatch fx when there's an even number of elements in cardsInPlay array
	if (cardsInPlay.length % 2 === 0) {
	checkForMatch();
 } else {
	// if the above isn't true, send following alert to user
	alert("Flip another card");
}
};

// create fx to make the game board and add event handler
var createBoard = function() {
	// create for loop to iterate over the cards array
	for (var i=0; i < cards.length; i++) {
		// create an img element and store in the cardElement var
		var cardElement = document.createElement("img");
		// add content to the above img element
		cardElement.setAttribute("src", "images/back.png");
		// add a data-id attribute to track current card
		cardElement.setAttribute("data-id", i);
		// add event handler to execute flipCard fx when user clicks
		cardElement.addEventListener("click", flipCard);
		// add the var carElement to the element w/specified id
		document.getElementById("game-board").appendChild(cardElement);
	}
};

// execute the createBoard fx
createBoard();




