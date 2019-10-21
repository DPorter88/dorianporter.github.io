$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var remain = 10;
    var choices = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",];
    var compChoice = choices[Math.floor(Math.random() * choices.length)]
    var answer = compChoice;
    var wShow = document.getElementById("w");
    var lShow = document.getElementById("l");
    var rShow = document.getElementById("r");
    var gShow = document.getElementById("iGuess");
    
    console.log("C: " + compChoice);
    
    document.onkeyup = function (_event) {
    
    
    var userGuess = _event.key;
    
    if (userGuess == "1" || userGuess == "2" || userGuess == "3" || userGuess == "4" || userGuess == "5" || userGuess == "6" || userGuess == "7" || userGuess == "8" || userGuess == "9" || userGuess == "10" ||
        userGuess == "11" || userGuess == "12" || userGuess == "13" {
            console.log("g: " + userGuess)
        if (userGuess == compChoice) {
    
            alert("Correct! The number was " + answer + " !");
            wins++;
            wShow.textContent = wins;
            console.log("w " + wins);
            // reset
            compChoice = choices[Math.floor(Math.random() * choices.length)];
            remain = 10;
            rShow.textContent = remain;
            $("#iGuess").empty();
            console.log("C: " + compChoice);
        }
    
        else {
            // display guess
            remain--;
            rShow.textContent = remain;
            $("#iGuess").append(userGuess + ", ");
            console.log("r " + remain);
    
            if (remain === 0) {
    
                rShow.textContent = remain;
                losses++;
                lShow.textContent = losses;
                alert("So close! The letter was " + answer + " !");
                console.log("l " + losses);
                // reset
                compChoice = choices[Math.floor(Math.random() * choices.length)];
                remain = 10;
                rShow.textContent = remain;
                $("#iGuess").empty();
    
                console.log("C: " + compChoice);
            };
        };
    
    }
    
    else {
        alert("Invalid Input!");
    };
    