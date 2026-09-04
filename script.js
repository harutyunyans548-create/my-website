const header = document.getElementById("header");
let buttonTop = document.getElementById("button-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
    buttonTop.style.opacity = "1";
    buttonTop.style.pointerEvents = "all";
  } else {
    header.classList.add("transparent");
    header.classList.remove("scrolled");
    buttonTop.style.opacity = "0"
    buttonTop.style.pointerEvents = "none";

  }
});
let left = document.getElementById("left");
let right = document.getElementById("right");
let slide = document.getElementById("slider");
let sub = 0;

right.addEventListener("click",function() {

    sub++
    if (sub == 1) {
        slide.style.transform = "translateX(-473px)";
    }
    if (sub == 2) {
        slide.style.transform = "translateX(-925px)";
    }
    if (sub == 3) {
        slide.style.transform = "translateX(0px)";
        sub = 0;
    }

    // console.log(sub);
});

left.addEventListener("click",function() {

    if (sub == 0) {
        slide.style.transform = "translateX(-925px)";
        sub = 2;
    }else if (sub == 2) {
        slide.style.transform = "translateX(-473px)";
        sub = 1;
    }else if (sub == 1 ) {
        slide.style.transform = "translateX(0px)";
        sub = 0

    }


    // console.log(sub);
    
})

let navigationBar = document.getElementById("navigation-bar");
let burgerMenu = document.getElementById("burger-menu");
let close = document.getElementById("close");
burgerMenu.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
})
close.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
})