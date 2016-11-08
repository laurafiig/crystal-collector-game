$(document).ready(function() {

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

//display initial hit points on character icon
$("#goalVal").html(goal);
$("#scoreVal").html(score);
$("#numWins").html(wins);
$("#numLosses").html(losses);

});
