// var screenWidth = window.matchMedia("(min-width: 768px)");
// screenFunction(screenWidth);
// screenWidth.addListener(screenFunction);

// function screenFunction(screenWidth) {
//   if (screenWidth.matches) {
//     toggler = true;
//   }
// }

document.querySelector(".menu-icon").addEventListener("click", mobileSlideIn);
let sideMenu = document.querySelector(".slidein-menu");
let menuLine1 = document.querySelector(".menu-line1");
let menuLine2 = document.querySelector(".menu-line2");
let navbar = document.querySelector("nav");
let menuSwitch = true;

function mobileSlideIn() {
  menuSwitch = !menuSwitch;
  if (menuSwitch === false) {
    sideMenu.style.transition = ".8s cubic-bezier(.64,0,.37,.99)";
    sideMenu.style.transform = "translateX(0)";
    menuLine1.style.transform = "rotate(45deg) translate(3px,10px)";
    menuLine2.style.transform = "rotate(134deg) translate(4px,3px)";
    menuLine1.style.backgroundColor = "red";
    menuLine2.style.backgroundColor = "red";
    menuLine1.style.transition = ".3s ease-in";
    menuLine2.style.transition = ".3s ease-in";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    sideMenu.style.transform = "translateX(100%)";
    menuLine1.style.backgroundColor = "#fff";
    menuLine2.style.backgroundColor = "#fff";
    menuLine1.style.transform = "rotate(0deg)";
    menuLine2.style.transform = "rotate(0deg)";
    document.querySelector("body").style.overflow = "unset";
  }
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbar.style.boxShadow = "0px -4px 20px -4px #333";
  } else if (document.body.scrollTop == 0) {
    navbar.style.boxShadow = "unset";
  }
}
