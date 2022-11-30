const balls = document.getElementById('section-ball');

// function rgb() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// }

const ballGenerator = () => {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    balls.appendChild(ball);
  }
};

ballGenerator();
