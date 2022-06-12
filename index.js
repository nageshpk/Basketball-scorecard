
let hscore = 0

let homeScore = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-add-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-add-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-add-btn-3")

homeScoreBtnOne.addEventListener("click", function(){
    hscore += 1
    homeScore.textContent = hscore
})

homeScoreBtnTwo.addEventListener("click", function(){
    hscore += 2
    homeScore.textContent = hscore
})

homeScoreBtnThree.addEventListener("click", function(){
    hscore += 3
    homeScore.textContent = hscore
})



let gscore = 0

let guestScore = document.getElementById("guest-score")
let guestScoreBtnOne = document.getElementById("guest-score-add-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-add-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-add-btn-3")

guestScoreBtnOne.addEventListener("click", function(){
    gscore += 1
    guestScore.textContent = gscore
})

guestScoreBtnTwo.addEventListener("click", function(){
    gscore += 2
    guestScore.textContent = gscore
})

guestScoreBtnThree.addEventListener("click", function(){
    gscore += 3
    guestScore.textContent = gscore
})
