const logo = document.querySelector('.logo');

let rotating = false;

logo.addEventListener('mouseenter', () => {
  logo.style.animation = 'rotate 0.5s ease-in-out forwards';
  rotating = true;
});

logo.addEventListener('mouseleave', () => {
  logo.style.animation = 'rotate-back 0.5s ease-in-out forwards';
  rotating = false;
});

logo.addEventListener('animationend', () => {
  if (rotating) {
    logo.style.animation = 'none';
  } else {
    logo.style.animation = 'shake 0.5s ease-in-out 5s infinite';
  }
});

logo.addEventListener('animationstart', () => {
  if (rotating) {
    logo.style.animation = 'none';
  }
});