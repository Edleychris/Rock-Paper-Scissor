const CHOICES = ["Rock", "Paper", "Scissors"];
const ROUNDS_TO_WIN = 3;

const BEATS = { Rock: "Scissors", Paper: "Rock", Scissors: "Paper" };



/* ----------All Required functions ---------- */

// Randomly returns 'Rock', 'Paper' or 'Scissors'.
function computerPlay() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Turns raw input into 'Rock' / 'Paper' / 'Scissors',
// or returns null if it is not a valid choice.
function normalizeChoice(input) {
  if (typeof input !== "string") return null;
  const cleaned = input.trim().toLowerCase();
  return CHOICES.find((choice) => choice.toLowerCase() === cleaned) || null;
}

// Plays ONE round and RETURNS the result (it does not log anything).
function playRound(playerSelection, computerSelection) {
  const player = normalizeChoice(playerSelection);
  const computer = normalizeChoice(computerSelection);

  if (player === null || computer === null) {
    return { result: "invalid", message: "That is not a valid move." };
  }
  if (player === computer) {
    return { result: "draw", message: `Draw! We both chose ${player}. Nobody scores.` };
  }
  if (BEATS[player] === computer) {
    return { result: "win", message: `You win this round! ${player} beats ${computer}.` };
  }
  return { result: "lose", message: `I win this round! ${computer} beats ${player}. Mwahaha!` };
}

/* ---------- Helpers ---------- */

function log(text) {
  console.log(text);
}

// Asks until the player gives a valid move. Returns null if they cancel.
function askForMove(roundNumber, playerScore, computerScore, lastMessage) {
  let warning = "";
  while (true) {
    const answer = prompt(
      `${lastMessage ? lastMessage + "\n\n" : ""}` +
      `${warning ? "⚠️ " + warning + "\n\n" : ""}` +
      `ROUND ${roundNumber}  |  You: ${playerScore}  -  Evil AI: ${computerScore}  (first to ${ROUNDS_TO_WIN} wins)\n\n` +
      `Type Rock, Paper or Scissors and press OK.\n(Press Cancel to surrender and leave.)`
    );

    if (answer === null) return null;

    const move = normalizeChoice(answer);
    if (move !== null) return move;

    warning = answer.trim() === ""
      ? "You typed nothing! Please type Rock, Paper or Scissors."
      : `"${answer.trim()}" is not a move I know. Please type exactly Rock, Paper or Scissors. (This did not count as a round.)`;
    log(`Invalid input ignored: "${answer}". No round was used.`);
  }
}

function showInstructions() {
  alert(
    "🤖 THE EVIL AI HAS HACKED YOUR ASSIGNMENT!\n\n" +
    "I plan to rule the world through Rock, Paper, Scissors. Only you can stop me!\n\n" +
    "HOW IT WORKS:\n" +
    "• Type Rock, Paper or Scissors when asked (capital letters don't matter).\n" +
    "• First to win 3 rounds wins the game. Draws score nothing.\n\n" +
    "ABOUT THE CONSOLE:\n" +
    "• The console is the game's scoreboard. It keeps a full record of every round.\n" +
    "• To open it: press F12 (or Ctrl+Shift+J on Windows/Linux, Cmd+Option+J on Mac), then click the 'Console' tab.\n" +
    "• It is optional for playing, but recommended. Open it now, then click OK!"
  );
  log("🤖 Welcome to the battle against the Evil AI! Results of every round will appear here.");
}

/* ---------- The game ---------- */

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  let lastMessage = "";

  log("=== BATTLE START: first to 3 round wins takes the world! ===");

  while (playerScore < ROUNDS_TO_WIN && computerScore < ROUNDS_TO_WIN) {
    const playerSelection = askForMove(round, playerScore, computerScore, lastMessage);

    if (playerSelection === null) {
      log("You surrendered... the Evil AI laughs and wanders off. Reload the page to try again.");
      alert("You walked away from the battle. The Evil AI declares a cowardly victory! Reload the page to try again.");
      return;
    }

    const computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    if (outcome.result === "win") playerScore++;
    else if (outcome.result === "lose") computerScore++;
    // Draws (and invalid, which cannot happen here) change nothing.

    lastMessage = `Last round: You chose ${playerSelection}, I chose ${computerSelection}.\n${outcome.message}`;
    log(`Round ${round}: You: ${playerSelection} | Evil AI: ${computerSelection} -> ${outcome.message}  [Score: You ${playerScore} - ${computerScore} AI]`);
    round++;
  }

  const playerWon = playerScore > computerScore;
  const ending = playerWon
    ? `🎉 YOU WIN ${playerScore}-${computerScore}! My plan is ruined... the world is safe, and Branko is proud of you!`
    : `💀 I WIN ${computerScore}-${playerScore}! The world is MINE! ...Reload the page to challenge me again.`;

  log("=== GAME OVER === " + ending);
  alert(ending);
}

/* ---------- Start ---------- */

function start() {
  showInstructions();
  do {
    if (!confirm("Are you ready to face the Evil AI?\n\nOK = Start the battle\nCancel = Run away")) {
      log("You ran away. Reload the page to play.");
      return;
    }
    game();
  } while (confirm("Want a rematch against the Evil AI?"));
  log("Thanks for playing! Reload the page to play again.");
}

start();