
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "white";
    } else {
      nav.style.backgroundColor = "#f5c247";
    }
  });


  window.addEventListener('scroll', function() {
    var nav = document.querySelector('.button');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "#1a8917";
    } else {
      nav.style.backgroundColor = "balck";
    }
  });


  