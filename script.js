const circles = document.getElementById('section-circle');
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

const generateCircles = () => {
  circles.innerHTML = '';
  for (let i = 0; i < 6; i += 1) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.backgroundColor = rgb();
    circles.appendChild(circle);
  }
  const circle = document.querySelectorAll('.circle');
  rgbColor.innerText = circle[Math.floor(Math.random() * 5)].style.backgroundColor;
};

generateCircles();

const correctCircle = () => {
  const circle = document.querySelectorAll('.circle');
  for (let i = 0; i < circle.length; i += 1) {
    circle[i].addEventListener('click', (e) => {
      if (e.target.style.backgroundColor === rgbColor.innerText) {
        answer.innerHTML = 'Acertou!';
        incrementScore();
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
      generateCircles();
      correctCircle()
    });
  }
};

correctCircle();

const resetButton = () => {
  answer.innerHTML = 'Escolha uma cor';
  circles.innerHTML = '';
  generateCircles();
  correctCircle();
};

reset.addEventListener('click', resetButton);
