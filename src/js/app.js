const sideMenu = document.querySelector('.slidein-menu');
const menuLine1 = document.querySelector('.menu-line1');
const menuLine2 = document.querySelector('.menu-line2');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');
let menuSwitch = true;

document.querySelector('.menu-icon').addEventListener('click', mobileSlideIn);

window.onscroll = function() {
  scrollFunction();
};

window.addEventListener(
  'load',
  function load() {
    window.removeEventListener('load', load, false);
    document.body.classList.remove('preload');
  },
  false
);

function mobileSlideIn() {
  menuSwitch = !menuSwitch;
  if (menuSwitch === false) {
    menuLine1.classList.add('open-topline');
    menuLine2.classList.add('open-bottomline');
    sideMenu.classList.add('open-sidemenu');
    body.style.overflow = 'hidden';
  } else {
    menuLine1.classList.remove('open-topline');
    menuLine2.classList.remove('open-bottomline');
    sideMenu.classList.remove('open-sidemenu');
    body.style.overflow = 'unset';
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbar.style.boxShadow = '0px -4px 20px -4px #33333396';
  } else if (document.body.scrollTop == 0) {
    navbar.style.boxShadow = 'unset';
  }
}
