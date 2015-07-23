variables to keep track of...
- how many cards have been clicked
- number of moves
- gameHasEnded = false; (true or false)

- click listener for the cards

html portion
<div class="cards-container">
	<div class="card king matched"></div>
	<div class="card queen"></div>
	<div class="card king matched"></div>
	<div class="card queen"></div>
</div>

.card {
	background:url('backofcard.jpg');
}

.king.selected {
	backgrouund:url('front-king.jpg');
}

.king.matched {
	backgrouund:url('front-king.jpg');
	border:2px solid green;
}

var numberOfMoves = 0;

$(".card").on("click",function(){ 

	// detect if 2 cards are already selected...
	if( $('.selected').length == 2 ) {
		$('.card').removeClass('selected');
	}

	if(!$(this).hasClass('matched')) {
		$(this).addClass('selected');
	}

	if( $('.selected').length == 2 ) {
		numberOfMoves++; // numberOfMoves = numberOfMoves + 1;
		var card1 = $(".selected:eq(0)").attr("class");
		var card2 = $(".selected:eq(1)").attr("class");

		console.log("card 1: ", card1);
		console.log('card 2: ', card2);

		if(card1 == card2) {
			$(".selected").addClass("matched").removeClass("selected");
		}



	}




});






