// حددي تاريخ الميلاد القادم (مثلاً 5 يونيو 2025)
const birthday = new Date("June 5, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdownEl.style.display = "none";
    messageEl.innerHTML = "كل عام وأنتِ بخير يا نورة! 🎉🎂<br>أتمنى لكِ يوماً مليئاً بالحب والسعادة 💖";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}ي ${hours}س ${minutes}د ${seconds}ث`;
  }
}, 1000);
