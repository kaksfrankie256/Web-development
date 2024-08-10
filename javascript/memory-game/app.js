const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let  cardsChosen = []
let  cardsChosenIds = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch(){

    const cards = document.querySelectorAll('img')
    const option1Id = cardsChosen[0]
    const option2Id = cardsChosen[1]

    if(option1Id == option2Id){
        cards[option1Id].setAttribute('src', 'images/blank.png')
        cards[option2Id].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image')
    }

    else if (cardsChosen[0] == cardsChosen[1]){
        alert('You have found a match')
        cards[option1Id].setAttribute('src', 'images/white.png')
        cards[option2Id].setAttribute('src', 'images/white.png')
        cards[option1Id].removeEventListener('click', flipCard)
        cards[option2Id].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[option1Id].setAttribute('src', 'images/blank.png')
        cards[option2Id].setAttribute('src', 'images/blank.png')
        alert('Try again')
    }

    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations you found them all'
    }
}

function flipCard(){
   const cardId = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)
   this.setAttribute('src', cardArray[cardId].img)

   if (cardsChosen.length === 2){
    setTimeout( checkMatch, 500)
   }
}
