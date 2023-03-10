/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
// getComputerChoice()


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

// console.log(squares)
function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors']
  let randomNumber = Math.floor(Math.random() * 3)
  let computerCh = options[randomNumber]
  return computerCh
}

getResult()

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  if (playerChoice == computerChoice) {
    console.log("computerChoice ", computerChoice)
    console.log("playerChoice ", playerChoice)

    console.log("It's a tie ")

  }
  if (playerChoice == 'Rock') {
    if (computerChoice == 'Scissor') {
      console.log("computerChoice ", computerChoice)
      console.log("playerChoice ", playerChoice)

      console.log("You won ")
    }
    if (computerChoice == 'Paper') {
      console.log("computerChoice ", computerChoice)
      console.log("playerChoice ", playerChoice)

      console.log("You lost ")
    }
  }
  if (playerChoice == 'Scissors') {
    if (computerChoice == 'Rock') {
      console.log("computerChoice ", computerChoice)
      console.log("playerChoice ", playerChoice)

      console.log("You lost ")
    }
    if (computerChoice == 'Paper') {
      console.log("computerChoice ", computerChoice)
      console.log("playerChoice ", playerChoice)

      console.log("You won ")
    }
  }
  if (playerChoice == 'Paper') {
    if (computerChoice == 'Scissors') {
      console.log("computerChoice ", computerChoice)
      console.log("playerChoice ", playerChoice)

      console.log("You lost ")
    }
    if (computerChoice == 'Rock') {
      console.log("computerChoice ", computerChoice)
      console.log("playerChoice ", playerChoice)

      console.log("You won ")
    }
  }

  // All situations where human draws, set `score` to 0


  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here


  // Otherwise human loses (aka set score to -1)


  // return score

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const squares = document.querySelectorAll('.rpsButton')
  // let playerChoice
  // let computerChoice
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  squares.forEach(square => {
    square.onclick = () => {
      let playerChoice = square.value
      let computerChoice = getComputerChoice()
      
      getResult(playerChoice, computerChoice)

    }
  })
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument



  // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame() {

}

playGame()