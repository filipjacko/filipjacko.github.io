window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');

  // Calculate the rotation angle based on the scroll position
  var rotation = window.scrollY / 5; // Adjust the division factor to control the rotation speed

  // Apply the rotation transform to the logo
  logo.style.transform = 'rotate(' + rotation + 'deg)';
});