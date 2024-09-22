score = 0;
cross = true;

// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000);
document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 122 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  Obstacle = document.querySelector(".Obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));

  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(Obstacle, null).getPropertyValue("left")
  );

  oy = parseInt(
    window.getComputedStyle(Obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML ="Game Over";
    Obstacle.classList.remove("obstacleAnime");
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      animDuration = parseFloat(
        window
          .getComputedStyle(dino, null)
          .getPropertyValue("animation-duration")
      );
      newDuration = animDuration - 0.2;
      Obstacle.style.animDuration = newDuration + "s";
    }, 500);
  }
}, 10);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}
