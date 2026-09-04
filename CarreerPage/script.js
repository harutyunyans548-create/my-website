let navigationBar = document.getElementById("navigation-bar");
let burgerMenu = document.getElementById("burger-menu");
let close = document.getElementById("close");
burgerMenu.addEventListener("click", function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
})
close.addEventListener("click", function () {
    navigationBar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
})

let iconka1 = document.getElementById("iconka1");
let iconka2 = document.getElementById("iconka2");
let iconka3 = document.getElementById("iconka3");
let iconka4 = document.getElementById("iconka4");
let iconka5 = document.getElementById("iconka5");
let iconka6 = document.getElementById("iconka6");
let iconka7 = document.getElementById("iconka7");
let iconka8 = document.getElementById("iconka8");

let baristabox1 = document.getElementById("baristabox1");
let baristakochak1 = document.getElementById("baristakochak1");
let barista1 = document.getElementById("barista1");
let k = 0;
barista1.onclick = () => {
    k++;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;

    iconka1.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";


    baristabox1.style.height = "1200px";
    baristakochak1.style.display = "none";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex"

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";


    if (k == 2) {
        baristabox1.style.height = "200px";
        baristakochak1.style.display = "flex";
        iconka1.style.transform = "rotate(0deg)";
        k = 0;
    }
}

let baristabox2 = document.getElementById("baristabox2");
let baristakochak2 = document.getElementById("baristakochak2");
let barista2 = document.getElementById("barista2");
let b = 0;
barista2.onclick = () => {
    k = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    b++;
    baristabox2.style.height = "1200px";
    baristakochak2.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";

    iconka2.style.transform = "rotate(180deg)";
    iconka1.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";

    if (b == 2) {
        baristabox2.style.height = "200px";
        baristakochak2.style.display = "flex"
        b = 0;
        iconka2.style.transform = "rotate(0deg)";

    }

}

let baristabox3 = document.getElementById("baristabox3");
let baristakochak3 = document.getElementById("baristakochak3");
let barista3 = document.getElementById("barista3");
let c = 0;
barista3.onclick = () => {
    k = 0;
    b = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;

    c++;
    baristabox3.style.height = "1200px";
    baristakochak3.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";
    iconka3.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka1.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";


    if (c == 2) {
        baristabox3.style.height = "200px";
        baristakochak3.style.display = "flex"
        c = 0;
        iconka3.style.transform = "rotate(0deg)";

    }
    // baristakochak1.innerHTML = ` Բարիստա ${<i class="fa-solid fa-angle-up"></i>}`
}


let baristabox4 = document.getElementById("baristabox4");
let baristakochak4 = document.getElementById("baristakochak4");
let barista4 = document.getElementById("barista4");
let d = 0;
barista4.onclick = () => {
    k = 0;
    b = 0;
    c = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    d++;
    baristabox4.style.height = "1100px";
    baristakochak4.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex";

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";
    iconka4.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka1.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";

    if (d == 2) {
        baristabox4.style.height = "200px";
        baristakochak4.style.display = "flex"
        d = 0;
        iconka4.style.transform = "rotate(0deg)";

    }
    // baristakochak1.innerHTML = ` Բարիստա ${<i class="fa-solid fa-angle-up"></i>}`
}


let baristabox5 = document.getElementById("baristabox5");
let baristakochak5 = document.getElementById("baristakochak5");
let barista5 = document.getElementById("barista5");
let e = 0;
barista5.onclick = () => {
    k = 0;
    b = 0;
    c = 0;
    d = 0;
    f = 0;
    g = 0;
    h = 0;
    e++;
    baristabox5.style.height = "1600px";
    baristakochak5.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex";

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";
    iconka5.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka1.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";


    if (e == 2) {
        baristabox5.style.height = "200px";
        baristakochak5.style.display = "flex"
        e = 0;
        iconka5.style.transform = "rotate(0deg)";

    }
    // baristakochak1.innerHTML = ` Բարիստա ${<i class="fa-solid fa-angle-up"></i>}`
}

let baristabox6 = document.getElementById("baristabox6");
let baristakochak6 = document.getElementById("baristakochak6");
let barista6 = document.getElementById("barista6");
let f = 0;
barista6.onclick = () => {
    k = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    g = 0;
    h = 0;
    f++;
    baristabox6.style.height = "1900px";
    baristakochak6.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex";

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";
    iconka6.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka1.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";


    if (f == 2) {
        baristabox6.style.height = "200px";
        baristakochak6.style.display = "flex"
        f = 0;
        iconka6.style.transform = "rotate(0deg)";

    }
    // baristakochak1.innerHTML = ` Բարիստա ${<i class="fa-solid fa-angle-up"></i>}`
}


let baristabox7 = document.getElementById("baristabox7");
let baristakochak7 = document.getElementById("baristakochak7");
let barista7 = document.getElementById("barista7");
let g = 0;
barista7.onclick = () => {
    k = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    h = 0;
    g++;
    baristabox7.style.height = "1200px";
    baristakochak7.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex";

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox8.style.height = "200px";
    baristakochak8.style.display = "flex";

    iconka7.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka1.style.transform = "rotate(0deg)";
    iconka8.style.transform = "rotate(0deg)";

    if (g == 2) {
        baristabox7.style.height = "200px";
        baristakochak7.style.display = "flex"
        g = 0;
        iconka7.style.transform = "rotate(0deg)";

    }
    // baristakochak1.innerHTML = ` Բարիստա ${<i class="fa-solid fa-angle-up"></i>}`
}


let baristabox8 = document.getElementById("baristabox8");
let baristakochak8 = document.getElementById("baristakochak8");
let barista8 = document.getElementById("barista8");
let h = 0;
barista8.onclick = () => {
    k = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h++;
    baristabox8.style.height = "1100px";
    baristakochak8.style.display = "none"

    baristabox1.style.height = "200px";
    baristakochak1.style.display = "flex";

    baristabox2.style.height = "200px";
    baristakochak2.style.display = "flex";

    baristabox3.style.height = "200px";
    baristakochak3.style.display = "flex";

    baristabox4.style.height = "200px";
    baristakochak4.style.display = "flex";

    baristabox5.style.height = "200px";
    baristakochak5.style.display = "flex";

    baristabox6.style.height = "200px";
    baristakochak6.style.display = "flex";

    baristabox7.style.height = "200px";
    baristakochak7.style.display = "flex";


    iconka8.style.transform = "rotate(180deg)";
    iconka2.style.transform = "rotate(0deg)";
    iconka3.style.transform = "rotate(0deg)";
    iconka4.style.transform = "rotate(0deg)";
    iconka5.style.transform = "rotate(0deg)";
    iconka6.style.transform = "rotate(0deg)";
    iconka7.style.transform = "rotate(0deg)";
    iconka1.style.transform = "rotate(0deg)";

    if (h == 2) {
        baristabox8.style.height = "200px";
        baristakochak8.style.display = "flex"
        h = 0;
        iconka8.style.transform = "rotate(0deg)";

    }
    // baristakochak1.innerHTML = ` Բարիստա ${<i class="fa-solid fa-angle-up"></i>}`
}