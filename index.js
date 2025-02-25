let score1 = 0
let score2 = 0
let isFinal = false

function homePlusOne(){
  
  let scoreHome = document.getElementById("homeScore")
  score1 += 1
  scoreHome.textContent = score1
  
} 

function homePlusTwo(){
  
  let scoreHome = document.getElementById("homeScore")
  score1 += 2
  scoreHome.textContent = score1
  
} 

function homePlusThree(){
 
  let scoreHome = document.getElementById("homeScore")
  score1 += 3
  scoreHome.textContent = score1
  
} 

function guestPlusOne(){
 
  let scoreGuest = document.getElementById("guestScore")
  score2 += 1
  scoreGuest.textContent = score2
  
} 


function guestPlusTwo(){

  let scoreGuest = document.getElementById("guestScore")
  score2 += 2
  scoreGuest.textContent = score2
  
} 

function guestPlusThree(){
  
  let scoreGuest = document.getElementById("guestScore")
  score2 += 3
  scoreGuest.textContent = score2
  
} 

function final(){
  isFinal = true
  let final = document.getElementById("finalScore")
  final.textContent = "FINAL SCORE!"
  score1 = 0
  score2 = 0
  disableButtons()
  document.getElementById("reset").disabled = false
}

function reset(){
  isFinal = false
  let final = document.getElementById("finalScore")
  document.getElementById("homeScore").textContent = 0
  document.getElementById("guestScore").textContent = 0
  final.textContent = " "
  score1 = 0
  score2 = 0
  enableButtons()
  document.getElementById("reset").disabled = true
}


function disableButtons() {
  const buttons = document.querySelectorAll('button:not(#reset)');
  buttons.forEach(button => button.disabled = true);
}

function enableButtons() {
  const buttons = document.querySelectorAll('button:not(#reset)');
  buttons.forEach(button => button.disabled = false);
}

