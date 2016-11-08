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
console.log(count1,count2,count3,count4)
//display initial stats on game board

$(document).ready(function() {

$("#goalVal").html(goal);
$("#scoreVal").html(score);
$("#numWins").html(wins);
$("#numLosses").html(losses);

//var score=score+count1
//console.log(score)
//for (i=1; 1<5; 1++){
	
$("#crystal1").on("click",function(){
	score += count1;
	$("#scoreVal").html(score);
});
	
$("#crystal2").on("click",function(){
	score += count2;
	$("#scoreVal").html(score);
});
	
$("#crystal3").on("click",function(){
	score += count3;
	$("#scoreVal").html(score);
});
	
$("#crystal4").on("click",function(){
	score += count4;
	$("#scoreVal").html(score);
});


});
