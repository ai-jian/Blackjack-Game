let player = {
    name: 'Ai',
    chips: 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''

const startBtn = document.querySelector('.start-btn')
const newCardBtn = document.querySelector('.new-card')
const messageDisplay = document.querySelector('#message')
const sumDisplay = document.querySelector('#sum')
const cardsDisplay = document.querySelector('#cards')
const playerName = document.querySelector('#player-name')


playerName.innerHTML = player.name + ": $" + player.chips


// random cards from 1 - 13
function getRandomCard() {
    let randomInt = Math.floor(Math.random() * 13 + 1)
    if (randomInt > 10) {
        return 10
    } else if (randomInt === 1) {
        return 11
    } else {
        return randomInt
    }
}


function startGame() {
    isAlive = true
    hasBlackjack = false
    const firstCard = getRandomCard()
    const secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsDisplay.innerHTML = ''
    for (let i = 0; i < cards.length; i++) {
        cardsDisplay.textContent += cards[i] + " "
    }

    sumDisplay.textContent = sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        player.chips += 100
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        player.chips -= 100
        isAlive = false
    }
    messageDisplay.textContent = message
    playerName.innerHTML = player.name + ": $" + player.chips
}
startBtn.addEventListener('click', startGame)

//Drawing a new card from the deck!
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        const card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}
newCardBtn.addEventListener('click', newCard)


