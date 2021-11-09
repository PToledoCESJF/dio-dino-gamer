const dino = document.querySelector('.dino');

let isJumping = false;
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

document.addEventListener('keyup', handleKeyUp);