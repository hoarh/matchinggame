var numMoves=0;
var cards=$('.cards');

function isMatch(card1, card2) { 
	if(card1 == card2) {
		return true;
	} else {
		return false;
	}
}

function shuffleCards() {
	$('.matched').removeClass('matched');
	$('.selected').removeClass('selected');
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
			}else { 
				console.log("they are not a match");
						$('.selected').removeClass('selected');//ask about how to make card flip over then flip back
			}
		}


	  	//When all the cards are matched
		if($('.matched').length == $('.cards').length) { //you could also say .length == 4, but this is more flexible
			//alert that game is over
			alert("Congratulations, you did it!");
			shuffleCards();
		}	
	
		$('#start, #reset').click(shuffleCards);	

	});
});



