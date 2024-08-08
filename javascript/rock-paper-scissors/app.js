const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id //checks what the user has clicked 
    userChoiceDisplay.innerHTML = userChoice //displays the user choice 
    generateComputerChoice()//function that  randomises the seletion of the computer
    getResult() // getting the results of the choices whether its a win, draw or lose
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1// can also use possibleChoices.length
    //console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice // displays thee computer choice
}

function getResult() {
    if (computerChoice === userChoice)
    {
        result = 'its a draw'
    }

    if (computerChoice ==='rock' && userChoice === 'paper')
        {
            result = 'You Win!'
        }

    if (computerChoice ==='rock' && userChoice == 'scissors')
        {
            result = 'You Lost!'
        }
    if (computerChoice ==='scissors' && userChoice === 'paper')
        {
            result = 'You Lost!'
        }
    
    if (computerChoice ==='scissors' && userChoice == 'rock')
        {
            result = 'You Win!'
        }
    if (computerChoice ==='paper' && userChoice === 'rock')
        {
            result = 'You lost!'
        }

    if (computerChoice ==='paper' && userChoice == 'scissors')
        {
            result = 'You Win!'
        }

    resultDisplay.innerHTML = result
}