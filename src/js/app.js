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
let menuSwitch = true;

function mobileSlideIn() {
  menuSwitch = !menuSwitch;
  if (menuSwitch === false) {
    sideMenu.style.transition = ".5s ease-in";
    sideMenu.style.transform = "translateX(0)";
    menuLine1.style.transform = "rotate(45deg) translate(3px,10px)";
    menuLine2.style.transform = "rotate(134deg) translate(4px,3px)";
    menuLine1.style.backgroundColor = "red";
    menuLine2.style.backgroundColor = "red";
    menuLine1.style.transition = ".3s ease-in";
    menuLine2.style.transition = ".3s ease-in";
  } else {
    sideMenu.style.transform = "translateX(100%)";
    menuLine1.style.backgroundColor = "#fff";
    menuLine2.style.backgroundColor = "#fff";
    menuLine1.style.transform = "rotate(0deg)";
    menuLine2.style.transform = "rotate(0deg)";
  }
}
