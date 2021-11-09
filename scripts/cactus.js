function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = (Math.random() * 3000) + cactusPosition ;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">FIM DO JOGO</h1>';
    }
    cactusPosition -= steps;
    cactus.style.left = cactusPosition + 'px';

  }, velocity);

  setTimeout(createCactus, randomTime);
}

createCactus();