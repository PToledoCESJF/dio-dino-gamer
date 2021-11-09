const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const timerView = document.querySelector('.timer');

let isJumping = false;
let isGameOver = false;
let position = 0;
let timer = 0;
let steps = 10;
let velocity = 30;
const timeAnimation = `${velocity * 50}s`;
background.style.setProperty('--limit', timeAnimation);

function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 100) {
      clearInterval(upInterval);
      down();
    }
    position += 20;
    dino.style.bottom = position + 'px';
  }, velocity)
}

function down() {
  let downInterval = setInterval(() => {
    if (position <= 0) {
      clearInterval(downInterval);
      isJumping = false;
    } else {
      position -= steps;
      dino.style.bottom = position + 'px';
    }
  }, velocity)
}

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function addVelocity(time){
  if(time % 20 == 0){
    velocity += 2;
    steps += 1;
    console.log(velocity);
  } 
  
}

setInterval(() => {
  timerView.innerHTML = `Pontuação: ${(timer++)}`
  addVelocity(timer);
}, velocity * 10);
document.addEventListener('keyup', handleKeyUp);