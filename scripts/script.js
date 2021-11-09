const dino = document.querySelector('.dino');

let position = 0;
const steps = 10;
const velocity = 20;

function jump() {
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
    } else {
      position -= steps;
      dino.style.bottom = position + 'px';
    }
  }, velocity)
}


function handleKeyUp(event) {
  if (event.keyCode === 32) {
    jump();
  }
}

document.addEventListener('keyup', handleKeyUp);