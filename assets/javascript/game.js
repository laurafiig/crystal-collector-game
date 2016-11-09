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

//reset function
function reset () {
//reset all variables except win/loss counters
//including new random number generation
score = 0;
goal = Math.floor(Math.random() * 102) + 19;
count1 = Math.floor(Math.random() * 12) + 1;
count2 = Math.floor(Math.random() * 12) + 1;
count3 = Math.floor(Math.random() * 12) + 1;
count4 = Math.floor(Math.random() * 12) + 1;
//reset display of goals and score
$("#goalVal").html(goal);
$("#scoreVal").html(score);
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
		alert("you lose");
		reset();
//matched goal, win condition 
//log score, record and alert win, reset
	} else {
		$("#scoreVal").html(score);
		wins++;	
		$("#numWins").html(wins);
		alert("you win");
		reset();
}

}

//add value of crystal one
$("#crystal1").on("click",function(){
	score += count1;
	collect()
});
//add value of crystal two	
$("#crystal2").on("click",function(){
	score += count2;
	collect()	
});
//add value of crystal three	
$("#crystal3").on("click",function(){
	score += count3;
	collect()	
});
//add value of crystal four	
$("#crystal4").on("click",function(){
	score += count4;
		collect()
});

});