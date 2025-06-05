
const countdownEl = document.getElementById('countdown');
const heartEl = document.getElementById('heart');
const messageEl = document.getElementById('message');

let timeLeft = 20 * 60; // 20 minutes in seconds

const timer = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  countdownEl.textContent = \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownEl.style.display = 'none';
    heartEl.style.fontSize = '60px';
    showHearts();
    messageEl.textContent = "🎉 Happy Birthday Nora 🎉";
    messageEl.style.display = 'block';
  }

  timeLeft--;
}, 1000);

function showHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.textContent = '💖';
    heart.style.left = \`\${Math.random() * 100}%\`;
    heart.style.top = '90%';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}
