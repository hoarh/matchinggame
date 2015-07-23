var numberOfMoves=0;
var gameHasEnded=false;
function newGame(){
	var cards = $(".cards");
	console.log("cards", cards);
	cards.removeClass("selected matched");
	cards=shuffleCards(cards);
	cards.add("#game").show();
	$("#gameOver").hide();
	gameHasEnded=false;
}

function shuffleCards(cards){
	var currentIndex = cards.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = temporaryValue;
	}
	cards.each(function(index,card){
		$("#game-cards").prepend(card);
	});
	
	console.log("shuffled cards", cards);
	return cards;
}
function isAMatch(card1,card2){
	if(card1==card2){
		return true;
	}
	return false;
}
function handleEndOfGame(){
	if(!gameHasEnded){
		$("#number-of-moves").text(numberOfMoves);
		$("#gameOver").show();
		alert($("#gameOver").text());
		numberOfMoves=0;
		//handles if user clicks on cards after finishing game
		gameHasEnded=true;
	}
}
$(document).ready(function(){
	newGame();
	$(".cards").click(function(){

		//if 2 are selected on first click, this is a new matching attempt so hide selected cards
		if($(".selected").length==2){
			$(".selected").removeClass("selected");
		}

		//feel free to use toggle class (but only if you want to allow them to turn over a card they just turned over)

		//if card hasn't already been matched, select it
		if(!$(this).hasClass("matched")){
			$(this).addClass("selected");	
		}
		//if there are now 2 cards selected, check to see if they match
		if($(".selected").length==2){
			numberOfMoves++;
			var card1=$(".selected:eq(0)").attr("class");
			var card2=$(".selected:eq(1)").attr("class");
			if(isAMatch(card1,card2)){
				$(".selected").addClass("matched").removeClass("selected");
			}
		}
		//game over when all cards have class "matched"
		if($(".matched").length==$(".cards").length){
			handleEndOfGame();
		}
	});
	$("#start,#reset").click(newGame);
});