var userChoice =""
var computerChoice =""
var winner =""
var computerChoice = ""
$("#shoot").click(function() {
  var userChoice = $("input").val();
$("#userChoice").append(userChoice);

var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice > .80){
$("#computerChoice").html("rock");
}
else if (computerChoice > .60){
$("#computerChoice").html("paper");
}
else{
$("#computerChoice").html("scissors");
}
});
