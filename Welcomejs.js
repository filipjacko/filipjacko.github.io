const logo = document.querySelector('.logo');

let isCursorOverLogo = false;

logo.addEventListener('mouseover', function() {
  isCursorOverLogo = true;
  this.classList.add('rotate');
  this.classList.remove('rotate');
});

logo.addEventListener('mouseout', function() {
  isCursorOverLogo = false;
  this.classList.remove('rotate');
  this.classList.add('rotate');
});

function shakeLogo() {
  if (!isCursorOverLogo) {
    logo.classList.add('shake');
    setTimeout(() => {
      logo.classList.remove('shake');
    }, 200);
  }
}

setInterval(shakeLogo, 2000);