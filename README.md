# JavaScript Assignment - Rock Paper Scissors

## Files

- `index.html` - blank HTML document connected to the external JavaScript file.
- `script.js` - contains all game logic.

## JavaScript basics used

This solution intentionally uses beginner-level JavaScript:

- variables with `let` and `const`
- arrays
- functions
- parameters and return values
- `if`, `else if`, and `else`
- `while` loop
- `continue`
- string methods: `trim()` and `toLowerCase()`
- `Math.random()` and `Math.floor()`
- `prompt()`, `alert()`, and `console.log()`

## Assignment behavior

1. The player receives console instructions before the game starts.
2. `computerPlay()` randomly returns Rock, Paper, or Scissors.
3. `prompt()` asks the player for a choice.
4. Input is trimmed and converted to lowercase.
5. Invalid input shows a message and does not change the score.
6. Cancel ends the game safely.
7. `playRound()` returns `player`, `computer`, or `draw`.
8. `game()` keeps playing until the player or computer reaches 3 points.
9. Draws do not award points.

## Simple testing checklist

Try all of these before submitting:

- `Rock`
- `rock`
- `ROCK`
- `   paper   `
- `Scissors`
- invalid text such as `hello`
- an empty input
- press Cancel
- get a draw
- play until the player reaches 3
- play until the computer reaches 3
