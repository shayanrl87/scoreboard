// define scoreboard
let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
// define button of guest
let guest1btn = document.getElementById("guest1Score");
let guest2btn = document.getElementById("guest2Score");
let guest3btn = document.getElementById("guest3Score");

// define button of home
let home1btn = document.getElementById("home1Score");
let home2btn = document.getElementById("home2Score");
let home3btn = document.getElementById("home3Score");


let homeCount = 0;
// function that add score with givin number for Home
function addpoint1(num,home){
    homeCount +=num
    home.textContent = homeCount
   
}

let awayCount = 0

// function that add score with givin number for Guest
function addpoint2(num,away){
    awayCount +=num
    away.textContent = awayCount
   
}




// define guest button based on score 

guest1btn.addEventListener("click",() => addpoint2(1,guestScore))
guest2btn.addEventListener("click",() => addpoint2(2,guestScore))
guest3btn.addEventListener("click",() => addpoint2(3,guestScore))

// define home button based on score 

home1btn.addEventListener("click",()=>addpoint1(1,homeScore));
home2btn.addEventListener("click",()=>addpoint1(2,homeScore));
home3btn.addEventListener("click",()=>addpoint1(3,homeScore));


// new game button


function newGame(){
    homeCount = 0;
    awayCount = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}