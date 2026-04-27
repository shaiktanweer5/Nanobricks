(function() {
  "use strict";

  // Back to top button
  let backtotop = document.querySelector('.back-to-top');

  if (backtotop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    });
  }

})();
