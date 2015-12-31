var rockPaper = rockPaper || {};

$('#rock').click(function() { compare('Rock', randomChoice()); });
$('#paper').click(function() { compare('Paper', randomChoice()); });
$('#scissors').click(function() { compare('Scissors', randomChoice()); });
$('#lizard').click(function() { compare('Lizard', randomChoice()); });
$('#spock').click(function() { compare('Spock', randomChoice()); });

var humanChoice = document.getElementById("");

// $('ul').click(rockPaper.alerty);

function randomChoice(){
    var computerChoice = Math.random();
    if (computerChoice <= 0.2) {
        computerChoice = "Rock";
    } else if (computerChoice > 0.2 && computerChoice <= 0.4) {
        computerChoice = "Paper";
    } else if (computerChoice > 0.4 && computerChoice <= 0.6){
        computerChoice = "Scissors";
    } else if (computerChoice > 0.6 && computerChoice <= 0.8){
        computerChoice = "Lizard";
    } else {
        computerChoice = "Spock";
    }
    return computerChoice;  
}




console.log("Computer choose: " + randomChoice());

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        alert("The result is a tie!\nPlease make a new choice...");
    }

    if (choice1 === "Rock") {
        if (choice2 === "Paper") {
            alert("Paper Wins!");
        } else if (choice2 === "Scissors") {
            alert("Rock Wins!");
        } else if (choice2 === "Lizard") {
            alert("Rock Wins!");
        } else {
            alert("Spock Wins!");
        }
    }


    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            alert("Paper Wins!");
        } else if (choice2 === "Scissors") {
            alert("Scissors Wins!");
        } else if (choice2 === "Lizard") {
            alert("Lizard Wins!");
        } else {
            alert("Paper Wins!");
        }
    }


    if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            alert("Rock Wins!");
        } else if (choice2 === "Paper") {
            alert("Scissors Wins!");
        } else if (choice2 === "Lizard") {
            alert("Scissors Wins!");
        } else {
            alert("Spock Wins!");
        }
    }





    if (choice1 === "Lizard") {
        if (choice2 === "Rock") {
            alert("Rock Wins!");
        } else if (choice2 === "Paper") {
            alert("Lizard Wins!");
        } else if (choice2 === "Scissors") {
            alert("Scissors Wins!");
        } else {
            alert("Lizard Wins!");
        }
    }





    if (choice1 === "Spock") {
        if (choice2 === "Rock") {
            alert("Spock Wins!");
        } else if (choice2 === "Paper") {
            alert("Paper Wins!");
        } else if (choice2 === "Scissors") {
            alert("Spock Wins!");
        } else {
            alert("Lizard Wins!");
        }
    }

}
