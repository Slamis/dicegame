// function rndDice() {
//
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
//
// }

//var p1Score = 0;
//var p2Score = 0;
var roundNumber = 0;
var x = document.querySelectorAll(".btn");

/* can be done also with
document.querySelector(".img1").setAttribute("src", "images/dice" + rndDice() + ".png"); */
//

function fastPlay() {
  document.querySelector("h1").innerHTML = "Game In Progress...";
  document.querySelector("h1").style.color = "#4ECCF3";

  x[1].disabled = true;
  for (i = 0; i <= 9; i++) {

    (function(i) {
      setTimeout(function() {
        play(i);
      }, 300 * i);
    })(i);
  }

}

function play() {
  //rounf count +1
  roundCounter();

  //change button colors
  x[0].style.backgroundColor = "Red";
  x[1].style.backgroundColor = "Green";

  //random dice generator
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  //dice img selection
  document.querySelector(".img1").src = "images/dice" + dice1 + ".png";
  document.querySelector(".img2").src = "images/dice" + dice2 + ".png";

  //check round winner
  if (dice1 === dice2) {
    //document.querySelector("h1").innerHTML = "Draw";
  } else if (dice1 > dice2) {
    //document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> P1 Wins!";
    //document.querySelector(".fa-flag").style.color = "red";
    p1Score = p1Score + 1;
    document.querySelector(".p1").innerText = "Player 1 " + "| Score: " + p1Score;

  } else {
    //document.querySelector("h1").innerHTML = "P2 Wins! <i class='fas fa-flag'></i> ";
    //document.querySelector(".fa-flag").style.color = "red";
    p2Score = p2Score + 1;
    document.querySelector(".p2").innerText = "Player 2 " + "| Score: " + p2Score;
  }

  //winner check / winner decleration
  winner();

}

//Round +1
function roundCounter() {
  roundNumber = ++roundNumber;
  document.querySelector("h2").textContent = "Round Number: " + roundNumber;

}

//Winner check
function winner() {
  //round 10?
  if (roundNumber >= 10) {
    //Play btn disable
    //x[1].disabled = true;
    if (p1Score < p2Score) {
      document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> P2 Wins The Game!";
      document.querySelector("h1").style.color = "#ffee32";
      document.querySelector(".p2").style.color = "red";
    } else if (p1Score > p2Score) {
      document.querySelector("h1").innerHTML = "P1 Wins The Game! <i class='fas fa-flag'></i>";
      document.querySelector("h1").style.color = "#ffee32";
      document.querySelector(".p1").style.color = "red";
    } else {
      document.querySelector("h1").innerHTML = "Its A Draw!!!";
      document.querySelector("h1").style.color = "Green";
    }
  }
}

//Reset Game
function reset() {
  p1Score = 0;
  p2Score = 0;
  roundNumber = 0;
  document.querySelector(".img1").src = "images/dice6.png";
  document.querySelector(".img2").src = "images/dice6.png";
  document.querySelector("h1").innerHTML = "Click Play To Start A Game";
  x[0].style.backgroundColor = "grey";
  x[1].style.backgroundColor = "grey";
  x[1].disabled = false;
  document.querySelector(".p1").innerText = "Player 1 " + "| Score: " + p1Score;
  document.querySelector(".p2").innerText = "Player 2 " + "| Score: " + p2Score;
  document.querySelector("h2").textContent = "Round Number: " + 0;
  document.querySelector("h1").style.color = "#4ECCA3";
  document.querySelector(".p1").style.color = "#4ECCA3";
  document.querySelector(".p2").style.color = "#4ECCA3";

}
