const logo = document.getElementById('logo');

let shakeIntervalId;

function startShaking() {
  shakeIntervalId = setInterval(() => {
    logo.classList.add('shake');
    setTimeout(() => {
      logo.classList.remove('shake');
    }, 100);
  }, 5000);
}

function stopShaking() {
  clearInterval(shakeIntervalId);
}

logo.addEventListener('mouseover', () => {
  logo.style.animation = 'rotate 1s forwards';
  stopShaking();
});

logo.addEventListener('mouseout', () => {
  logo.style.animation = 'rotate-backwards 1s forwards';
  startShaking();
});

startShaking();