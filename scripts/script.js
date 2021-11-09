const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;
const steps = 10;
const velocity = 20;

function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      down();
    }
    position += steps;
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
    if(!isJumping){
      jump();
    }
  }
}


function createCactus(){
  const cactus = document.createElement('div');
  let cactusPosition = 1000;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if(cactusPosition < -60){
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">FIM DO JOGO</h1>';
    }
    cactusPosition -= steps;
    cactus.style.left = cactusPosition + 'px';
      
  }, velocity)
}

createCactus();
document.addEventListener('keyup', handleKeyUp);