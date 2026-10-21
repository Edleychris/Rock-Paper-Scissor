// Rock Paper Scissors - JavaScript Assignment
// This game uses browser dialogs and the console only.

// Show instructions before the game begins.
alert(
    "ROCK, PAPER, SCISSORS - DEFEAT THE EVIL AI!\n\n" +
    "You need the browser console because round results and scores will appear there.\n\n" +
    "How to open it:\n" +
    "1. Press F12 (or Ctrl + Shift + J in many browsers).\n" +
    "2. Click the Console tab.\n\n" +
    "After closing this message, enter Rock, Paper, or Scissors when asked."
);

// Randomly choose Rock, Paper, or Scissors for the computer.
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);

    return choices[randomNumber];
}

// Play one round.
// Return a value that game() can use to update the score.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(
            "Draw! You both chose " + playerSelection + "."
        );
        return "draw";
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(
            "You win this round! " +
            playerSelection +
            " beats " +
            computerSelection +
            "."
        );
        return "player";
    }

    console.log(
        "The Evil AI wins this round! " +
        computerSelection +
        " beats " +
        playerSelection +
        "."
    );
    return "computer";
}

// Run the complete game until somebody reaches 3 points.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("=== ROCK, PAPER, SCISSORS ===");
    console.log("First to 3 points wins the game.");
    console.log("Draws and invalid attempts do not give points.");
    console.log("--------------------------------");

    while (playerScore < 3 && computerScore < 3) {
        let playerInput = prompt(
            "Choose Rock, Paper, or Scissors.\n\n" +
            "Current score:\n" +
            "You: " + playerScore + "\n" +
            "Evil AI: " + computerScore
        );

        // prompt() returns null when the player presses Cancel.
        if (playerInput === null) {
            alert("Game cancelled safely. The Evil AI will wait for another day!");
            console.log("The player cancelled the game.");
            return;
        }

        // Remove unnecessary spaces and make the input case-insensitive.
        playerInput = playerInput.trim().toLowerCase();

        // Validate the player's input.
        if (
            playerInput !== "rock" &&
            playerInput !== "paper" &&
            playerInput !== "scissors"
        ) {
            alert(
                "Invalid choice. Please enter only Rock, Paper, or Scissors.\n" +
                "This attempt does not affect the score."
            );
            continue;
        }

        // Convert the valid input to the same format used by computerPlay().
        let playerSelection;

        if (playerInput === "rock") {
            playerSelection = "Rock";
        } else if (playerInput === "paper") {
            playerSelection = "Paper";
        } else {
            playerSelection = "Scissors";
        }

        const computerSelection = computerPlay();

        console.log("You chose: " + playerSelection);
        console.log("Evil AI chose: " + computerSelection);

        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === "player") {
            playerScore = playerScore + 1;
        } else if (roundResult === "computer") {
            computerScore = computerScore + 1;
        }

        console.log(
            "Score -> You: " +
            playerScore +
            " | Evil AI: " +
            computerScore
        );
        console.log("--------------------------------");
    }

    if (playerScore === 3) {
        alert("You won! You defeated the Evil AI!");
        console.log("FINAL RESULT: You defeated the Evil AI 3 to " + computerScore + "!");
    } else {
        alert("The Evil AI won this time. Better luck next time!");
        console.log("FINAL RESULT: The Evil AI won 3 to " + playerScore + ".");
    }
}

// Start the game.
game();
