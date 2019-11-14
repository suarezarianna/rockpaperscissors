var userChoice =""
var computerChoice =""
var winner =""
var computerChoice = ""
$("#shoot").click(function() {
  $("#userChoice").empty()
  $("#result").empty()
  var userChoice = $("input").val();
$("#userChoice").append(userChoice);

var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice > .80){
$("#computerChoice").html("rock");
computerChoice = "rock"
}
else if (computerChoice > .60){
computerChoice = "paper"
$("#computerChoice").html("paper");
}
else{
$("#computerChoice").html("scissors");
computerChoice = "scissors"
}
if (userChoice === computerChoice){
  $("#result").text("Tie");
}
else if (userChoice === "rock"){
  if (computerChoice === "paper"){
    $("#result").text("Computer Wins")
  }
  else {
    $("#result").text("User Wins")
  }
}
else if (userChoice === "paper"){
 if (computerChoice === "rock"){
    $("#result").text("User Wins")
  }
  else if (computerChoice === "scissors"){
    $("#result").text("Computer Wins")
  }
}
else if (userChoice === "scissors"){
 if (computerChoice === "rock"){
    $("#result").text("Computer Wins")
  }
  else if (computerChoice === "paper"){
    $("#result").text("User Wins")
  }
}
});
