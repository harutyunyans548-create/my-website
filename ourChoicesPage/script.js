const header = document.getElementById("header");
let buttonTop = document.getElementById("button-top");
let navig = document.getElementById("navig");
window.addEventListener("scroll", () => {
  if (window.scrollY > 5500) {
    navig.style.bottom = "-100px"
  } 
  else{
    navig.style.bottom = "10px"
  }
});
let left = document.getElementById("left");
let right = document.getElementById("right");
let slide = document.getElementById("sliderA");
let sum = 0;

right.onclick = () => {
    sum++;
    if (sum == 1) {
        slide.style.transform = "translateX(-332px)";
    }
    if (sum == 2) {
        slide.style.transform = "translateX(-664px)";
    }
    if (sum == 3) {
        slide.style.transform = "translateX(-996px)";
    }
    if (sum == 4) {
        slide.style.transform = "translateX(-1328px)";
    }
    if (sum == 5) {
        slide.style.transform = "translateX(-1660px)";
    }
    if (sum == 6) {
        slide.style.transform = "translateX(-1992px)";
    }
    if (sum == 7) {
        slide.style.transform = "translateX(0px)";
        sum = 0;
    }
}
left.onclick = () => {
    if (sum == 0) {
        slide.style.transform = "translateX(-1992px)";
        sum = 6;
    }else if (sum == 1) {
        slide.style.transform = "translateX(0)";
        sum = 0;
    }else if (sum == 2) {
        slide.style.transform = "translateX(-332px)";
        sum = 1;
    }else if (sum == 3) {
        slide.style.transform = "translateX(-664px)";
        sum = 2;
    }else if (sum == 4) {
        slide.style.transform = "translateX(-996px)";
        sum = 3;
    }else if (sum == 5) {
        slide.style.transform = "translateX(-1328px)";
        sum = 4;
    }else if (sum == 6) {
        slide.style.transform = "translateX(-1660px)";
        sum = 5;
    }
}
let leftA = document.getElementById("leftA");
let rightA = document.getElementById("rightA");
let slideA = document.getElementById("sliderB");

let sumA = 0;

rightA.onclick = () => {
    sumA++;
    if (sumA == 1) {
        slideA.style.transform = "translateX(-332px)";
    }
    if (sumA == 2) {
        slideA.style.transform = "translateX(-664px)";
    }
    if (sumA == 3) {
        slideA.style.transform = "translateX(-996px)";
    }
    if (sumA == 4) {
        slideA.style.transform = "translateX(-1328px)";
    }
    if (sumA == 5) {
        slideA.style.transform = "translateX(-1660px)";
    }
    if (sumA == 6) {
        slideA.style.transform = "translateX(-1992px)";
    }
    if (sumA == 7) {
        slideA.style.transform = "translateX(-2324px)";
    }
    if (sumA == 8) {
        slideA.style.transform = "translateX(-2656px)";
    }
    if (sumA == 9) {
        slideA.style.transform = "translateX(-2988px)";
    }
    if (sumA == 10) {
        slideA.style.transform = "translateX(-3320px)";
    }
    if (sumA == 11) {
        slideA.style.transform = "translateX(-3652px)";
    }
    if (sumA == 12) {
        slideA.style.transform = "translateX(-3984px)";
    }
    if (sumA == 13) {
        slideA.style.transform = "translateX(-4316px)";
    }
    if (sumA == 14) {
        slideA.style.transform = "translateX(-4648px)";
    }
    if (sumA == 15) {
        slideA.style.transform = "translateX(-4980px)";
    }
    if (sumA == 16) {
        slideA.style.transform = "translateX(-5312px)";
    }
    if (sumA == 17) {
        slideA.style.transform = "translateX(-5644px)";
    }
    if (sumA == 18) {
        slideA.style.transform = "translateX(-5976px)";
    }
    if (sumA == 19) {
        slideA.style.transform = "translateX(-6308px)";
    }
    if (sumA == 20) {
        slideA.style.transform = "translateX(-6640px)";
    }
    if (sumA == 21) {
        slideA.style.transform = "translateX(-6972px)";
    }
    if (sumA == 22) {
        slideA.style.transform = "translateX(-7304px)";
    }
    if (sumA == 23) {
        slideA.style.transform = "translateX(-7636px)";
    }
    if (sumA == 24) {
        slideA.style.transform = "translateX(-7968px)";
    }
    if (sumA == 25) {
        slideA.style.transform = "translateX(-8300px)";
    }
    if (sumA == 26) {
        slideA.style.transform = "translateX(-8632px)";
    }
    if (sumA == 27) {
        slideA.style.transform = "translateX(-8964px)";
    }
    if (sumA == 28) {
        slideA.style.transform = "translateX(0)";
        sumA = 0;
    }
    
}
leftA.onclick = () => {
    if (sumA == 0) {
        slideA.style.transform = "translateX(-8964px)";
        sumA = 27;
    }else if (sumA == 1) {
        slideA.style.transform = "translateX(0)";
        sumA = 0;
    }else if (sumA == 2) {
        slideA.style.transform = "translateX(-332px)";
        sumA = 1;
    }else if (sumA == 3) {
        slideA.style.transform = "translateX(-664px)";
        sumA = 2;
    }else if (sumA== 4) {
        slideA.style.transform = "translateX(-996px)";
        sumA= 3;
    }else if (sumA == 5) {
        slideA.style.transform = "translateX(-1328px)";
        sumA = 4;
    }else if (sumA == 6) {
        slideA.style.transform = "translateX(-1660px)";
        sumA = 5;
    }
    else if (sumA == 7) {
        slideA.style.transform = "translateX(-1992px)";
        sumA = 6;
    }else if (sumA == 8) {
        slideA.style.transform = "translateX(-2324px)";
        sumA = 7;
    }
    else if (sumA == 9) {
        slideA.style.transform = "translateX(-2656px)";
        sumA = 8;
    }
    else if (sumA == 10) {
        slideA.style.transform = "translateX(-2988px)";
        sumA = 9;
    }
    else if (sumA == 11) {
        slideA.style.transform = "translateX(-3320px)";
        sumA = 10;
    }
    else if (sumA == 12) {
        slideA.style.transform = "translateX(-3652px)";
        sumA = 11;
    }
    else if (sumA == 13) {
        slideA.style.transform = "translateX(-3984px)";
        sumA = 12;
    }
    else if (sumA == 14) {
        slideA.style.transform = "translateX(-4316px)";
        sumA = 13;
    }
    else if (sumA == 15) {
        slideA.style.transform = "translateX(-4648px)";
        sumA = 14;
    }
    else if (sumA == 16) {
        slideA.style.transform = "translateX(-4980px)";
        sumA = 15;
    }
    else if (sumA == 17) {
        slideA.style.transform = "translateX(-5312px)";
        sumA = 16;
    }
    else if (sumA == 18) {
        slideA.style.transform = "translateX(-5644px)";
        sumA = 17;
    }
    else if (sumA == 19) {
        slideA.style.transform = "translateX(-5976px)";
        sumA = 18;
    }
    else if (sumA == 20) {
        slideA.style.transform = "translateX(-6308px)";
        sumA = 19;
    }
    else if (sumA == 21) {
        slideA.style.transform = "translateX(-6640px)";
        sumA = 20;
    }
    else if (sumA == 22) {
        slideA.style.transform = "translateX(-6972px)";
        sumA = 21;
    }
    else if (sumA == 23) {
        slideA.style.transform = "translateX(-7304px)";
        sumA = 22;
    }
    else if (sumA == 24) {
        slideA.style.transform = "translateX(-7636px)";
        sumA = 23;
    }
    else if (sumA == 25) {
        slideA.style.transform = "translateX(-7968px)";
        sumA = 24;
    }
    else if (sumA == 26) {
        slideA.style.transform = "translateX(-8300px)";
        sumA = 25;
    }
    else if (sumA == 27) {
        slideA.style.transform = "translateX(-8632px)";
        sumA = 26;
    }
    else if (sumA == 28) {
        slideA.style.transform = "translateX(-8964px)";
        sumA = 27;
    }
}

let leftB = document.getElementById("leftB");
let rightB = document.getElementById("rightB");
let slideB = document.getElementById("sliderC");

let sumB = 0;

rightB.onclick = () => {
    sumB++;
    if (sumB == 1) {
        slideB.style.transform = "translateX(-332px)";
    }
    if (sumB == 2) {
        slideB.style.transform = "translateX(-664px)";
    }
    if (sumB == 3) {
        slideB.style.transform = "translateX(-996px)";
    }
    if (sumB == 4) {
        slideB.style.transform = "translateX(-1328px)";
    }
    if (sumB == 5) {
        slideB.style.transform = "translateX(-1660px)";
    }
    if (sumB == 6) {
        slideB.style.transform = "translateX(-1992px)";
    }
    if (sumB == 7) {
        slideB.style.transform = "translateX(-2324px)";
    }
    if (sumB == 8) {
        slideB.style.transform = "translateX(-2656px)";
    }
    if (sumB == 9) {
        slideB.style.transform = "translateX(-2988px)";
    }
    if (sumB == 10) {
        slideB.style.transform = "translateX(-3320px)";
    }
    if (sumB == 11) {
        slideB.style.transform = "translateX(-3652px)";
    }
    if (sumB== 12) {
        slideB.style.transform = "translateX(-3984px)";
    }
    if (sumB == 13) {
        slideB.style.transform = "translateX(-4316px)";
    }
    if (sumB == 14) {
        slideB.style.transform = "translateX(-4648px)";
    }
    if (sumB == 15) {
        slideB.style.transform = "translateX(-4980px)";
    }
    if (sumB == 16) {
        slideB.style.transform = "translateX(-5312px)";
    }
    if (sumB == 17) {
        slideB.style.transform = "translateX(-5644px)";
    }
    if (sumB == 18) {
        slideB.style.transform = "translateX(-5976px)";
    }
    if (sumB == 19) {
        slideB.style.transform = "translateX(-6308px)";
    }
    if (sumB == 20) {
        slideB.style.transform = "translateX(-6640px)";
    }
    if (sumB == 21) {
        slideB.style.transform = "translateX(-6972px)";
    }
    if (sumB== 22) {
        slideB.style.transform = "translateX(-7304px)";
    }
    if (sumB == 23) {
        slideB.style.transform = "translateX(-7636px)";
    }
    if (sumB == 24) {
        slideB.style.transform = "translateX(-7968px)";
    }
    if (sumB == 25) {
        slideB.style.transform = "translateX(-8300px)";
    }
    if (sumB == 26) {
        slideB.style.transform = "translateX(0px)";
        sumB = 0;
    }
}
leftB.onclick = () => {
    if (sumB == 0) {
        slideB.style.transform = "translateX(-8300px)";
        sumB = 25;
    }else if (sumB == 1) {
        slideB.style.transform = "translateX(0)";
        sumB = 0;
    }else if (sumB == 2) {
        slideB.style.transform = "translateX(-332px)";
        sumB = 1;
    }else if (sumB == 3) {
        slideB.style.transform = "translateX(-664px)";
        sumB = 2;
    }else if (sumB== 4) {
        slideB.style.transform = "translateX(-996px)";
        sumB= 3;
    }else if (sumB == 5) {
        slideB.style.transform = "translateX(-1328px)";
        sumB = 4;
    }else if (sumB == 6) {
        slideB.style.transform = "translateX(-1660px)";
        sumB = 5;
    }
    else if (sumB == 7) {
        slideB.style.transform = "translateX(-1992px)";
        sumB = 6;
    }else if (sumB == 8) {
        slideB.style.transform = "translateX(-2324px)";
        sumB = 7;
    }
    else if (sumB == 9) {
        slideB.style.transform = "translateX(-2656px)";
        sumB = 8;
    }
    else if (sumB == 10) {
        slideB.style.transform = "translateX(-2988px)";
        sumB = 9;
    }
    else if (sumB == 11) {
        slideB.style.transform = "translateX(-3320px)";
        sumB = 10;
    }
    else if (sumB == 12) {
        slideB.style.transform = "translateX(-3652px)";
        sumB = 11;
    }
    else if (sumB == 13) {
        slideB.style.transform = "translateX(-3984px)";
        sumB = 12;
    }
    else if (sumB == 14) {
        slideB.style.transform = "translateX(-4316px)";
        sumB = 13;
    }
    else if (sumB == 15) {
        slideB.style.transform = "translateX(-4648px)";
        sumB = 14;
    }
    else if (sumB == 16) {
        slideB.style.transform = "translateX(-4980px)";
        sumB = 15;
    }
    else if (sumB == 17) {
        slideB.style.transform = "translateX(-5312px)";
        sumB = 16;
    }
    else if (sumB == 18) {
        slideB.style.transform = "translateX(-5644px)";
        sumB = 17;
    }
    else if (sumB == 19) {
        slideB.style.transform = "translateX(-5976px)";
        sumB = 18;
    }
    else if (sumB == 20) {
        slideB.style.transform = "translateX(-6308px)";
        sumB = 19;
    }
    else if (sumB == 21) {
        slideB.style.transform = "translateX(-6640px)";
        sumB = 20;
    }
    else if (sumB == 22) {
        slideB.style.transform = "translateX(-6972px)";
        sumB = 21;
    }
    else if (sumB == 23) {
        slideB.style.transform = "translateX(-7304px)";
        sumB = 22;
    }
    else if (sumB == 24) {
        slideB.style.transform = "translateX(-7636px)";
        sumB = 23;
    }
    else if (sumB == 25) {
        slideB.style.transform = "translateX(-7968px)";
        sumB = 24;
    }
}


let leftC = document.getElementById("leftC");
let rightC = document.getElementById("rightC");
let slideC = document.getElementById("sliderD");

let sumC = 0;
rightC.onclick = () => {
    sumC++;
    if (sumC == 1) {
        slideC.style.transform = "translateX(-332px)";
    }
    if (sumC == 2) {
        slideC.style.transform = "translateX(-664px)";
    }
    if (sumC == 3) {
        slideC.style.transform = "translateX(-996px)";
    }
    if (sumC == 4) {
        slideC.style.transform = "translateX(-1328px)";
    }
    if (sumC == 5) {
        slideC.style.transform = "translateX(-1660px)";
    }
    if (sumC == 6) {
        slideC.style.transform = "translateX(-1992px)";
    }
    if (sumC== 7) {
        slideC.style.transform = "translateX(-2324px)";
    }
    if (sumC == 8) {
        slideC.style.transform = "translateX(-2656px)";
    }
    if (sumC == 9) {
        slideC.style.transform = "translateX(-2988px)";
    }
    if (sumC == 10) {
        slideC.style.transform = "translateX(-3320px)";
    }
    if (sumC == 11) {
        slideC.style.transform = "translateX(-3652px)";
    }
    if (sumC== 12) {
        slideC.style.transform = "translateX(-3984px)";
    }
    if (sumC == 13) {
        slideC.style.transform = "translateX(-4316px)";
    }
    if (sumC == 14) {
        slideC.style.transform = "translateX(-4648px)";
    }
    if (sumC == 15) {
        slideC.style.transform = "translateX(0)";
        sumC = 0;
    }
}
leftC.onclick = () => {
    if (sumC == 0) {
        slideC.style.transform = "translateX(-4648px)";
        sumC = 14;
    }else if (sumC == 1) {
        slideC.style.transform = "translateX(0)";
        sumC = 0;
    }else if (sumC == 2) {
        slideC.style.transform = "translateX(-332px)";
        sumC = 1;
    }else if (sumC == 3) {
        slideC.style.transform = "translateX(-664px)";
        sumC = 2;
    }else if (sumC== 4) {
        slideC.style.transform = "translateX(-996px)";
        sumC= 3;
    }else if (sumC == 5) {
        slideC.style.transform = "translateX(-1328px)";
        sumC = 4;
    }else if (sumC == 6) {
        slideC.style.transform = "translateX(-1660px)";
        sumC = 5;
    }
    else if (sumC == 7) {
        slideC.style.transform = "translateX(-1992px)";
        sumC = 6;
    }else if (sumC == 8) {
        slideC.style.transform = "translateX(-2324px)";
        sumC = 7;
    }
    else if (sumC == 9) {
        slideC.style.transform = "translateX(-2656px)";
        sumC = 8;
    }
    else if (sumC == 10) {
        slideC.style.transform = "translateX(-2988px)";
        sumC = 9;
    }
    else if (sumC == 11) {
        slideC.style.transform = "translateX(-3320px)";
        sumC = 10;
    }
    else if (sumC == 12) {
        slideC.style.transform = "translateX(-3652px)";
        sumC = 11;
    }
    else if (sumC == 13) {
        slideC.style.transform = "translateX(-3984px)";
        sumC = 12;
    }
    else if (sumC == 14) {
        slideC.style.transform = "translateX(-4316px)";
        sumC = 13;
    }
}

let leftD = document.getElementById("leftD");
let rightD = document.getElementById("rightD");
let slideD = document.getElementById("sliderE");

let sumD = 0;

rightD.onclick = () => {
    sumD++;
    if (sumD == 1) {
        slideD.style.transform = "translateX(-332px)";
    }
    if (sumD == 2) {
        slideD.style.transform = "translateX(-664px)";
    }
    if (sumD == 3) {
        slideD.style.transform = "translateX(0)";
        sumD = 0;
    }
}
leftD.onclick = () => {
    if (sumD == 0) {
        slideD.style.transform = "translateX(-664px)";
        sumD = 2;
    }else if (sumD == 1) {
        slideD.style.transform = "translateX(0)";
        sumD = 0;
    }
    else if (sumD == 2) {
        slideD.style.transform = "translateX(-332px)";
        sumD = 1;
    }
        // console.log(sumD);
        
}

let leftE = document.getElementById("leftE");
let rightE = document.getElementById("rightE");
let slideE = document.getElementById("sliderF");

let sumE = 0;

rightE.onclick = () => {
    sumE++;
    if (sumE == 1) {
        slideE.style.transform = "translateX(-332px)";
    }
    if (sumE == 2) {
        slideE.style.transform = "translateX(-664px)";
    }
    if (sumE == 3) {
        slideE.style.transform = "translateX(-996px)";
    }
    if (sumE == 4) {
        slideE.style.transform = "translateX(-1328px)";
    }
    if (sumE == 5) {
        slideE.style.transform = "translateX(-1660px)";
    }
    if (sumE == 6) {
        slideE.style.transform = "translateX(-1992px)";
    }
    if (sumE== 7) {
        slideE.style.transform = "translateX(-2324px)";
    }
    if (sumE == 8) {
        slideE.style.transform = "translateX(-2656px)";
    }
    if (sumE == 9) {
        slideE.style.transform = "translateX(0)";
        sumE = 0;
    }
    // console.log(sumE);
    
}
leftE.onclick = () => {
    if (sumE == 0) {
        slideE.style.transform = "translateX(-2656px)";
        sumE = 8;
    }else if (sumE == 1) {
        slideE.style.transform = "translateX(0)";
        sumE = 0;
    }else if (sumE == 2) {
        slideE.style.transform = "translateX(-332px)";
        sumE = 1;
    }else if (sumE == 3) {
        slideE.style.transform = "translateX(-664px)";
        sumE = 2;
    }else if (sumE== 4) {
        slideE.style.transform = "translateX(-996px)";
        sumE= 3;
    }else if (sumE== 5) {
        slideE.style.transform = "translateX(-1328px)";
        sumE = 4;
    }else if (sumE == 6) {
        slideE.style.transform = "translateX(-1660px)";
        sumE = 5;
    }
    else if (sumE == 7) {
        slideE.style.transform = "translateX(-1992px)";
        sumE = 6;
    }
    else if (sumE == 8) {
        slideE.style.transform = "translateX(-2324px)";
        sumE = 7;
    }   
}

let leftF = document.getElementById("leftF");
let rightF = document.getElementById("rightF");
let slideF = document.getElementById("sliderG");

let sumF = 0;

rightF.onclick = () => {
    sumF++;
    if (sumF == 1) {
        slideF.style.transform = "translateX(-332px)";
    }
    if (sumF == 2) {
        slideF.style.transform = "translateX(-664px)";
    }
    if (sumF == 3) {
        slideF.style.transform = "translateX(-996px)";
    }
    if (sumF == 4) {
        slideF.style.transform = "translateX(-1328px)";
    }
    if (sumF == 5) {
        slideF.style.transform = "translateX(-1660px)";
    }
    if (sumF == 6) {
        slideF.style.transform = "translateX(-1992px)";
    }
    if (sumF== 7) {
        slideF.style.transform = "translateX(0px)";
        sumF = 0;
    }
    // console.log(sumE);
    
}
leftF.onclick = () => {
    if (sumF == 0) {
        slideF.style.transform = "translateX(-1992px)";
        sumF = 6;
    }else if (sumF == 1) {
        slideF.style.transform = "translateX(0)";
        sumF = 0;
    }else if (sumF == 2) {
        slideF.style.transform = "translateX(-332px)";
        sumF = 1;
    }else if (sumF == 3) {
        slideF.style.transform = "translateX(-664px)";
        sumF = 2;
    }else if (sumF== 4) {
        slideF.style.transform = "translateX(-996px)";
        sumF= 3;
    }else if (sumF== 5) {
        slideF.style.transform = "translateX(-1328px)";
        sumF = 4;
    }
    else if (sumF == 6) {
        slideF.style.transform = "translateX(-1660px)";
        sumF = 5;
    }
}


let navigationBar = document.getElementById("navigation-bar");
let burgerMenu = document.getElementById("burger-menu");
let close = document.getElementById("close");
burgerMenu.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
})
close.addEventListener("click",function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
})