var numMoves=0;


function isMatch(card1, card2) { 
	if(card1 == card2) {
		return true;
	} else {
		return false;
	}
}

$(function() {
  
  //click listener for the cards
  	$('.cards').click(function() { 
  		//change the CSS of that card to be face-up
  		$(this).addClass('selected');
  		//when two card are clicked...
  		if($('.selected').length == 2) {
  		//1 move has been made
  			numMoves = numMoves + 1;
  		//Find out the class of the 2 cards that have been clicked
  			var card1 = $('.selected:eq(0)').attr('class'); 
			var card2 = $('.selected:eq(1)').attr('class');
		//Are they a match?
			if (isMatch(card1,card2)) {
				$('.selected').addClass('matched').removeClass('selected');
			}	else { 
					console.log("they are not a match");
					$('.selected').removeClass('selected');//ask about how to make card flip over then flip back
				}
  	}

  	//When all the cards are matched
	if($('.matched').length == $('.cards').length) { //you could also say .length == 4, but this is more flexible
		//alert that game is over
		alert("Congratulations, you did it!");
		//reset the board by removing class "matched"
		$('.matched').removeClass('matched');
		//shuffle the cards
		function shuffleCards(cards) {
			var currentIndex = cards.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
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
  	}	
});



