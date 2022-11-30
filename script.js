const balls = document.getElementById('section-ball');
const rgbColor = document.getElementById('rgb-color');
const reset = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');

const rgb = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const incrementScore = () => {
  score.innerHTML = 3 + Number(score.innerHTML);
};

const ballGenerator = () => {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = rgb();
    balls.appendChild(ball);
  }
  const circle = document.querySelectorAll('.ball');
  rgbColor.innerText = circle[Math.floor(Math.random() * 5)].style.backgroundColor;
};

ballGenerator();

const correctBall = () => {
  const circle = document.querySelectorAll('.ball');

  for (let i = 0; i < circle.length; i += 1) {
    circle[i].addEventListener('click', (e) => {
      if (e.target.style.backgroundColor === rgbColor.innerHTML) {
        answer.innerHTML = 'Acertou!';
        incrementScore();
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
};

correctBall();

const resetButton = () => {
  answer.innerHTML = 'Escolha uma cor';
  balls.innerHTML = '';
  ballGenerator();
  correctBall();
};

reset.addEventListener('click', resetButton);
