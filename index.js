
let hscore = 0

let homeScore = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-add-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-add-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-add-btn-3")
let newGameEl = document.getElementById("newgame-el")

homeScoreBtnOne.addEventListener("click", function(){
    hscore += 1
    homeScore.textContent = hscore
    leader()
})

homeScoreBtnTwo.addEventListener("click", function(){
    hscore += 2
    homeScore.textContent = hscore
    leader()
})

homeScoreBtnThree.addEventListener("click", function(){
    hscore += 3
    homeScore.textContent = hscore
    leader()
})



function leader() {
    if (hscore > gscore) {
        homeScore.classList.add('highlight')
        guestScore.classList.remove('highlight')
    } else if (hscore < gscore) {
        homeScore.classList.remove('highlight')
        guestScore.classList.add('highlight')
    } else {
        homeScore.classList.remove('highlight')
        guestScore.classList.remove('highlight')
    }
}


let gscore = 0

let guestScore = document.getElementById("guest-score")
let guestScoreBtnOne = document.getElementById("guest-score-add-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-add-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-add-btn-3")

guestScoreBtnOne.addEventListener("click", function(){
    gscore += 1
    guestScore.textContent = gscore
    leader()
})

guestScoreBtnTwo.addEventListener("click", function(){
    gscore += 2
    guestScore.textContent = gscore
    leader()
})

guestScoreBtnThree.addEventListener("click", function(){
    gscore += 3
    guestScore.textContent = gscore
    leader()
})



function newGame() {
    hscore = 0
    gscore = 0
    homeScore.textContent = hscore
    guestScore.textContent = gscore
    homeScore.classList.remove('highlight')
    guestScore.classList.remove('highlight')
}


