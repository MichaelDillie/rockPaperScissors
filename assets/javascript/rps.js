var compChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event) {
    // Checking if key is playable
    if(event.key === "r" || event.key === "p" || event.key === "s") {
        var userChoice = event.key;
        var compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];

        document.getElementById("comp").innerHTML = compChoice;
        document.getElementById("user").innerHTML = userChoice;

        // TIE CONDITIONS
        if(userChoice === "r" && compChoice === "r") {
            document.getElementById("ties").innerHTML = ties += 1;
        }
        if(userChoice === "s" && compChoice === "s") {
            document.getElementById("ties").innerHTML = ties += 1;
        }
        if(userChoice === "p" && compChoice === "p") {
            document.getElementById("ties").innerHTML = ties += 1;
        }
        //WIN CONDITIONS
        if(userChoice === "r" && compChoice === "s") {
            document.getElementById("wins").innerHTML = wins += 1;
        }
        if(userChoice === "p" && compChoice === "r") {
            document.getElementById("wins").innerHTML = wins += 1;
        }
        if(userChoice === "s" && compChoice === "p") {
            document.getElementById("wins").innerHTML = wins += 1;
        }
        //LOSS CONDITIONS
        if(userChoice === "r" && compChoice === "p") {
            document.getElementById("losses").innerHTML = losses += 1;
        }
        if(userChoice === "p" && compChoice === "s") {
            document.getElementById("losses").innerHTML = losses += 1;
        }
        if(userChoice === "s" && compChoice === "r") {
            document.getElementById("losses").innerHTML = losses += 1;
        }
    }
}