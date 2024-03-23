
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
    name: "Uvesh" ,
    chips: 145,
    sayHello : function(){
      console.log("Assalamualaikum")  
    }
}
player.sayHello()
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips
console.log(cards)
function getRandomCard(){

let randomNumber = Math.floor(Math.random()*13)+1

if (randomNumber ===1){
    return 11
} else if (randomNumber > 10){
    return 10
} else {
    return randomNumber
}
}

function startGame() {
    isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard , secondCard]
sum = firstCard + secondCard
    renderGame()
} 

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0 ; i< cards.length; i+=1){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum" + ":" + sum
    if (sum <= 20){
        message= "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!!"
        hasBlackJack = true
    } else {
        message = " You're out of the game. Better luck next time!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}    
