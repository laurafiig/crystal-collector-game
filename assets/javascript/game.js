//set initial variables
//wins and losses
var wins = 0
var losses = 0
//initial score
var score = 0
//randomly generated goal between 19 and 120
var goal = Math.floor(Math.random() * 102) + 19
//randomly generated crystal values between 1 and 12
var count1 = Math.floor(Math.random() * 12) + 1
var count2 = Math.floor(Math.random() * 12) + 1
var count3 = Math.floor(Math.random() * 12) + 1
var count4 = Math.floor(Math.random() * 12) + 1

$(document).ready(function() {

	//display initial stats on game board
	$("#goalVal").html(goal);
	$("#scoreVal").html(score);
	$("#numWins").html(wins);
	$("#numLosses").html(losses);
	//set initial crystal values
	$("#crystal1").attr("data-value", count1);
	$("#crystal2").attr("data-value", count2);
	$("#crystal3").attr("data-value", count3);
	$("#crystal4").attr("data-value", count4);

	//reset function
	function reset () {
		//reset all variables except win/loss counters
		//including new random number generation
		//reset display of goals and score
		score = 0;
		$("#scoreVal").html(score);
		goal = Math.floor(Math.random() * 102) + 19;
		$("#goalVal").html(goal);
		count1 = Math.floor(Math.random() * 12) + 1;
		$("#crystal1").attr("data-value", count1);
		count2 = Math.floor(Math.random() * 12) + 1;
		$("#crystal2").attr("data-value", count2);
		count3 = Math.floor(Math.random() * 12) + 1;
		$("#crystal3").attr("data-value", count3);
		count4 = Math.floor(Math.random() * 12) + 1;
		$("#crystal4").attr("data-value", count4);
	};

	//function to increase score, then check
	// for win/loss condition
	function collect() {
		//goal not reached,  log score and continue play
		if ((score) < (goal)) {
			$("#scoreVal").html(score);
		//passed goal, loss condition 
		//log score, record and alert loss, reset
		} else if ((score) > (goal)) {
			$("#scoreVal").html(score);
			losses++;
			$("#numLosses").html(losses);
			$("#myModal").modal("show");
			$("#winlose").html("Sorry, you lose!");
			reset();
		//matched goal, win condition 
		//log score, record and alert win, reset
		} else {
			$("#scoreVal").html(score);
			wins++;	
			$("#numWins").html(wins);
			$("#myModal").modal("show");
			$("#winlose").html("YOU WIN!!");
			reset();
		}	
	}


	// run game
	$(document).on("click", ".pic", function(){
		var count = parseInt($(this).attr("data-value"));
		score += count;
		collect()
	});

});
