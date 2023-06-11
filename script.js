window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');


  var rotation = window.scrollY / 5; 

  // Apply the rotation transform to the logo
  logo.style.transform = 'rotate(' + rotation + 'deg)';
});