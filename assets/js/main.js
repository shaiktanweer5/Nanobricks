(function () {
  "use strict";

  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('#navbar');

  if (mobileNavToggle) {

    mobileNavToggle.addEventListener('click', function () {

      navbar.classList.toggle('navbar-mobile');

      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');

    });

  }

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
