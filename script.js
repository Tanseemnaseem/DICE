var scores, rScores, aPlayer, gPlaying, pScore, pScore2, wScore, scoreInput;

init();
var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("div.player-name1").innerHTML = player1;
    document.querySelector("div.player-name2").innerHTML = player2;
}
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    aPlayer = 0;
    pScore = 0;
    pScore2 = 0;
    roundScore = 0;
    gPlaying = true;
    wScore = 20;
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.getElementById("name-0").textContent = "Player1";
    document.getElementById("name-1").textContent = "Player2";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";



}
scoreInput = document.getElementById("settingScoreInput");
scoreInput.addEventListener("input", () => wScore = scoreInput.value);
document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gPlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        console.log(dice2);
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "img/dice-" + dice + ".png";
        let diceDOM2 = document.querySelector(".dice2");
        diceDOM2.style.display = "block";
        diceDOM2.src = "img/dice-" + dice2 + ".png";
        if (dice !== 1 && dice2 !== 1) {
            roundScore += dice + dice2;
            if (dice == 6 && pScore == 6 || dice2 == 6 && pScore2 == 6) {
                scores[aPlayer] = 0;
                document.querySelector("#score-" + aPlayer).textContent = scores[aPlayer];
                nextPlayer();
            } else {
                document.querySelector("#current-" + aPlayer).textContent = roundScore;
            }
        } else {
            nextPlayer();
        }
        pScore = dice;
        pScore2 = dice2;
    }

});


document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gPlaying) {

        scores[aPlayer] += roundScore;
        document.querySelector("#score-" + aPlayer).textContent = scores[aPlayer];
        if (scores[aPlayer] >= wScore) {
            document.querySelector("#name-" + aPlayer).textContent =
                "Won the game!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".dice2").style.display = "none";
            document.querySelector(".player-" + aPlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + aPlayer + "-panel").classList.remove("active");
            gPlaying = false;
        } else {
            nextPlayer();
        }
    }

});



function nextPlayer() {
    aPlayer === 0 ? aPlayer = 1 : aPlayer = 0;
    roundScore = 0;
    pScore = 0;
    pScore2 = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");


    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice2").style.display = "block";
}