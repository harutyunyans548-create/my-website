let buttonTop = document.getElementById("button-top");
let navig = document.getElementById("navig");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    buttonTop.style.opacity = "1";
    buttonTop.style.pointerEvents = "all";
  } else {
    buttonTop.style.opacity = "0"
    buttonTop.style.pointerEvents = "none";
  }
});
let left = document.getElementById("left");
let right = document.getElementById("right");
let slider = document.getElementById("slider");
let sum = 0;
right.onclick = () => {
    sum++;
    if (sum == 1) {
      slider.style.transform = "translateX(-500px)"  
    }
    if (sum == 2) {
      slider.style.transform = "translateX(-1000px)"
    }
    if (sum == 3) {
      slider.style.transform = "translateX(-1500px)"
    }
    if (sum == 4) {
      slider.style.transform = "translateX(-2000px)"
    }
    if (sum == 5) {
      slider.style.transform = "translateX(-2500px)"
    }
    if (sum == 6) {
      slider.style.transform = "translateX(0)"
      sum = 0;
    }
};
left.onclick = () => {
    if (sum == 0) {
      slider.style.transform = "translateX(-2500px)";
      sum = 5;
    }else if (sum == 1) {
      slider.style.transform = "translateX(0px)";
      sum = 0;
    }else if (sum == 2) {
      slider.style.transform = "translateX(-500px)";
      sum = 1;
    }else if (sum == 3) {
      slider.style.transform = "translateX(-1000px)";
      sum = 2;
    }else if (sum == 4) {
      slider.style.transform = "translateX(-1500px)";
      sum = 3;
    }else if (sum == 5) {
      slider.style.transform = "translateX(-2000px)";
      sum = 4;
    }
};

let navigationBar = document.getElementById("navigation-bar");
let burgerMenu = document.getElementById("burger-menu");
let close = document.getElementById("close");
burgerMenu.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
})
close.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
})