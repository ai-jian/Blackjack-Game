const cardArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let firstCard = 0
let secondCard = 0
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ''

const startBtn = document.querySelector('.start-btn')
const newCardBtn = document.querySelector('.new-card')
const messageDisplay = document.querySelector('#message')
const sumDisplay = document.querySelector('#sum')
const cardsDisplay = document.querySelector('#cards')

//random cards
// function getRandomInt(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random()*())
// }
function startGame() {

    let randomInt = Math.floor(Math.random() * cardArray.length)
    firstCard = cardArray[randomInt]
    secondCard = cardArray[randomInt]
    sum = firstCard + secondCard

    cardsDisplay.innerHTML = ` ${firstCard} and ${secondCard}`
    sumDisplay.innerHTML = sum

    if (sum < 21) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'Wohoo! You have got Blackjack!'
        hasBlackjack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    messageDisplay.innerHTML = message
}

startBtn.addEventListener('click', startGame)


function newCard() {



    messageDisplay.innerHTML = `Drawing a new card from the deck!`
}

newCardBtn.addEventListener('click', newCard)
