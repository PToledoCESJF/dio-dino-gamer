const dino = document.querySelector('.dino');

let position = 0;

function jump(){
  setInterval(() => {
    position += 20;
    dino.style.bottom = position + 'px';

  }, 20)
}


function handleKeyUp(event){
  if(event.keyCode === 32){
    jump();
  }
}

document.addEventListener('keyup', handleKeyUp);