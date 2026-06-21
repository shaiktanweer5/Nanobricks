(function () {
"use strict";

/* Back to top */

let backtotop = document.querySelector('.back-to-top');

if(backtotop){

window.addEventListener('scroll', () => {

if(window.scrollY > 100){

backtotop.classList.add('active');

}else{

backtotop.classList.remove('active');

}

});

}


/* Mobile Navigation */

const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

if(mobileNavToggle){

mobileNavToggle.addEventListener('click', function(){

document.querySelector('#navbar').classList.toggle('navbar-mobile');

this.classList.toggle('bi-list');

this.classList.toggle('bi-x');

});

}


/* Close menu after clicking */

document.querySelectorAll('#navbar a').forEach(navlink => {

navlink.addEventListener('click', () => {

let navbar=document.querySelector('#navbar');

if(navbar.classList.contains('navbar-mobile')){

navbar.classList.remove('navbar-mobile');

mobileNavToggle.classList.add('bi-list');

mobileNavToggle.classList.remove('bi-x');

}

});

});

})();
