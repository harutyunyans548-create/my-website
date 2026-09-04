let navigationBar = document.getElementById("navigation-bar");
let burgerMenu = document.getElementById("burger-menu");
let close = document.getElementById("close");
burgerMenu.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
})
close.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
})