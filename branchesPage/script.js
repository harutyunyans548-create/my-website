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

let iframe = document.getElementById("iframe");
// qartezi kochakner

// երևան
let TigranMec = document.getElementById("TigranMec");  
let komitas = document.getElementById("komitas");
let abovyanbox = document.getElementById("abovyanbox");
let cicernakaberd = document.getElementById("cicernakaberd");
let homplex = document.getElementById("homplex");
let azatutyun = document.getElementById("azatutyun");
let halabyan = document.getElementById("halabyan");
let tumanyan = document.getElementById("tumanyan");
let kinomoskva = document.getElementById("kinomoskva");
let tigranpetrosyan = document.getElementById("tigranpetrosyan");
let moskovyan = document.getElementById("moskovyan");
let saryan = document.getElementById("saryan");
let aleqmanukyan = document.getElementById("aleqmanukyan");
let cafe = document.getElementById("cafe");
let charenc = document.getElementById("charenc");
let arami = document.getElementById("arami");
let kaskad = document.getElementById("kaskad");
let hakobyan = document.getElementById("hakobyan");
let njdeh = document.getElementById("njdeh");
let zvartnoc = document.getElementById("zvartnoc");
let erebuni = document.getElementById("erebuni");
let megamol = document.getElementById("megamol");
let slavonakan = document.getElementById("slavonakan");
let lerkamar = document.getElementById("lerkamar");
let vahram = document.getElementById("vahram");
let erevancity = document.getElementById("erevancity");
let haravarevmtyan = document.getElementById("haravarevmtyan");
let navbandyan = document.getElementById("navbandyan");
let politexnik = document.getElementById("politexnik");
let aramiancum = document.getElementById("aramiancum");
let abovyancbox3 = document.getElementById("abovyancbox3");
let isahakyan = document.getElementById("isahakyan");
let aleqmanukyan2 = document.getElementById("aleqmanukyan2");
let movsesxorenaci = document.getElementById("movsesxorenaci");
let TigranMec2 = document.getElementById("TigranMec2");
let navbandyan2 = document.getElementById("navbandyan2");
let amiryan = document.getElementById("amiryan");
let mashtoci21 = document.getElementById("mashtoci21");
let tumanyan2 = document.getElementById("tumanyan2");
let sayatnova = document.getElementById("sayatnova");
let hyusisayinpoxota = document.getElementById("hyusisayinpoxota");

// աբովյան
let drivethru = document.getElementById("drivethru");
let abovyancbox2 = document.getElementById("abovyancbox2");

//գյումրի 
let pushkinGyumri = document.getElementById("pushkinGyumri");
let lennakan = document.getElementById("lennakan");

// էջմիածին
let ejmiacincafe = document.getElementById("ejmiacincafe");
let mashtoc = document.getElementById("mashtoc");

// արմավիր
let hoktemberyan = document.getElementById("hoktemberyan");

// ծաղկաձոր
let caxkadzorcafe = document.getElementById("caxkadzorcafe");

// վանաձոր
let mhermkrtchyan  = document.getElementById("mhermkrtchyan");
let kirovakan = document.getElementById("kirovakan");



// qaxaqneri kochakner
let bolor = document.getElementById("bolor");
let erevan = document.getElementById("erevan");
let gyumri = document.getElementById("gyumri");
let abovyan = document.getElementById("abovyan");
let ejmiacin = document.getElementById("ejmiacin");
let caxkadzor = document.getElementById("caxkadzor");
let vanadzor = document.getElementById("vanadzor");
let armavir = document.getElementById("armavir");

bolor.addEventListener("click",function () {
    bolor.classList.add("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.remove("nshvac");
    erevan.classList.remove("nshvac");

    drivethru.style.display = "flex";
    hoktemberyan.style.display = "flex";
    mhermkrtchyan.style.display = "flex";
    kirovakan.style.display = "flex";
    caxkadzorcafe.style.display = "flex";
    ejmiacincafe.style.display = "flex";
    mashtoc.style.display = "flex";
    abovyancbox2.style.display = "flex";
    pushkinGyumri.style.display = "flex";
    lennakan.style.display = "flex";

    //---------------------------
    TigranMec.style.display =       "flex";
    komitas.style.display =         "flex";
    abovyanbox.style.display =      "flex";
    cicernakaberd.style.display =   "flex";
    homplex.style.display =         "flex";
    azatutyun.style.display =       "flex";
    halabyan.style.display =        "flex";
    tumanyan.style.display =        "flex";
    kinomoskva.style.display =      "flex";
    tigranpetrosyan.style.display = "flex";
    moskovyan.style.display =       "flex";
    saryan.style.display =          "flex";
    aleqmanukyan.style.display =    "flex";
    cafe.style.display =            "flex";
    charenc.style.display =         "flex";
    arami.style.display =           "flex";
    kaskad.style.display =          "flex";
    hakobyan.style.display =        "flex";
    njdeh.style.display =           "flex";
    zvartnoc.style.display =        "flex";
    erebuni.style.display =         "flex";
    megamol.style.display =         "flex";
    slavonakan.style.display =      "flex";
    lerkamar.style.display =        "flex";
    vahram.style.display =          "flex";
    erevancity.style.display =      "flex";
    haravarevmtyan.style.display =  "flex";
    navbandyan.style.display =      "flex";
    politexnik.style.display =      "flex";
    aramiancum.style.display =      "flex";
    abovyancbox3.style.display =    "flex";
    isahakyan.style.display =       "flex";
    aleqmanukyan2.style.display =   "flex";
    movsesxorenaci.style.display =  "flex";
    TigranMec2.style.display =      "flex";
    navbandyan2.style.display =     "flex";
    amiryan.style.display =         "flex";
    mashtoci21.style.display =      "flex";
    tumanyan2.style.display =       "flex";
    sayatnova.style.display =       "flex";
    hyusisayinpoxota.style.display ="flex";

    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131437.7509598234!2d40.03229343024005!3d39.96275377834135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2z0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2sam!4v1777917631732!5m2!1sru!2sam`
    
})
erevan.addEventListener("click",function () {
    erevan.classList.add("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.remove("nshvac");

    drivethru.style.display =       "none";
    hoktemberyan.style.display =    "none";
    mhermkrtchyan.style.display =   "none";
    kirovakan.style.display =       "none";
    caxkadzorcafe.style.display =   "none";
    ejmiacincafe.style.display =    "none";
    mashtoc.style.display =         "none";
    abovyancbox2.style.display =    "none";
    pushkinGyumri.style.display =   "none";
    lennakan.style.display =        "none";

    //---------------------------
    TigranMec.style.display =       "flex";
    komitas.style.display =         "flex";
    abovyanbox.style.display =      "flex";
    cicernakaberd.style.display =   "flex";
    homplex.style.display =         "flex";
    azatutyun.style.display =       "flex";
    halabyan.style.display =        "flex";
    tumanyan.style.display =        "flex";
    kinomoskva.style.display =      "flex";
    tigranpetrosyan.style.display = "flex";
    moskovyan.style.display =       "flex";
    saryan.style.display =          "flex";
    aleqmanukyan.style.display =    "flex";
    cafe.style.display =            "flex";
    charenc.style.display =         "flex";
    arami.style.display =           "flex";
    kaskad.style.display =          "flex";
    hakobyan.style.display =        "flex";
    njdeh.style.display =           "flex";
    zvartnoc.style.display =        "flex";
    erebuni.style.display =         "flex";
    megamol.style.display =         "flex";
    slavonakan.style.display =      "flex";
    lerkamar.style.display =        "flex";
    vahram.style.display =          "flex";
    erevancity.style.display =      "flex";
    haravarevmtyan.style.display =  "flex";
    navbandyan.style.display =      "flex";
    politexnik.style.display =      "flex";
    aramiancum.style.display =      "flex";
    abovyancbox3.style.display =    "flex";
    isahakyan.style.display =       "flex";
    aleqmanukyan2.style.display =   "flex";
    movsesxorenaci.style.display =  "flex";
    TigranMec2.style.display =      "flex";
    navbandyan2.style.display =     "flex";
    amiryan.style.display =         "flex";
    mashtoci21.style.display =      "flex";
    tumanyan2.style.display =       "flex";
    sayatnova.style.display =       "flex";
    hyusisayinpoxota.style.display ="flex";

    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97584.08450295664!2d44.406166470537684!3d40.15336119658675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1777900468586!5m2!1sru!2sam`


});

gyumri.addEventListener("click",function(){

    erevan.classList.remove("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.add("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.remove("nshvac");

    drivethru.style.display =       "none";
    hoktemberyan.style.display =    "none";
    mhermkrtchyan.style.display =   "none";
    kirovakan.style.display =       "none";
    caxkadzorcafe.style.display =   "none";
    ejmiacincafe.style.display =    "none";
    mashtoc.style.display =         "none";
    abovyancbox2.style.display =    "none";
    pushkinGyumri.style.display =   "flex";
    lennakan.style.display =        "flex";

    // -------------------------
    TigranMec.style.display =       "none";
    komitas.style.display =         "none";
    abovyanbox.style.display =      "none";
    cicernakaberd.style.display =   "none";
    homplex.style.display =         "none";
    azatutyun.style.display =       "none";
    halabyan.style.display =        "none";
    tumanyan.style.display =        "none";
    kinomoskva.style.display =      "none";
    tigranpetrosyan.style.display = "none";
    moskovyan.style.display =       "none";
    saryan.style.display =          "none";
    aleqmanukyan.style.display =    "none";
    cafe.style.display =            "none";
    charenc.style.display =         "none";
    arami.style.display =           "none";
    kaskad.style.display =          "none";
    hakobyan.style.display =        "none";
    njdeh.style.display =           "none";
    zvartnoc.style.display =        "none";
    erebuni.style.display =         "none";
    megamol.style.display =         "none";
    slavonakan.style.display =      "none";
    lerkamar.style.display =        "none";
    vahram.style.display =          "none";
    erevancity.style.display =      "none";
    haravarevmtyan.style.display =  "none";
    navbandyan.style.display =      "none";
    politexnik.style.display =      "none";
    aramiancum.style.display =      "none";
    abovyancbox3.style.display =    "none";
    isahakyan.style.display =       "none";
    aleqmanukyan2.style.display =   "none";
    movsesxorenaci.style.display =  "none";
    TigranMec2.style.display =      "none";
    navbandyan2.style.display =     "none";
    amiryan.style.display =         "none";
    mashtoci21.style.display =      "none";
    tumanyan2.style.display =       "none";
    sayatnova.style.display =       "none";
    hyusisayinpoxota.style.display ="none";

    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48336.34862613196!2d43.81242200636103!3d40.78353512426035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8b9b34fc9f%3A0x4f4bed0e45f99102!2z0JPRjtC80YDQuA!5e0!3m2!1sru!2sam!4v1777917541208!5m2!1sru!2sam`

});

abovyan.addEventListener("click",function(){

    erevan.classList.remove("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.add("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.remove("nshvac");

    drivethru.style.display =       "flex";
    hoktemberyan.style.display =    "none";
    mhermkrtchyan.style.display =   "none";
    kirovakan.style.display =       "none";
    caxkadzorcafe.style.display =   "none";
    ejmiacincafe.style.display =    "none";
    mashtoc.style.display =         "none";
    abovyancbox2.style.display =    "flex";
    pushkinGyumri.style.display =   "none";
    lennakan.style.display =        "none";

    // -------------------------
    TigranMec.style.display =       "none";
    komitas.style.display =         "none";
    abovyanbox.style.display =      "none";
    cicernakaberd.style.display =   "none";
    homplex.style.display =         "none";
    azatutyun.style.display =       "none";
    halabyan.style.display =        "none";
    tumanyan.style.display =        "none";
    kinomoskva.style.display =      "none";
    tigranpetrosyan.style.display = "none";
    moskovyan.style.display =       "none";
    saryan.style.display =          "none";
    aleqmanukyan.style.display =    "none";
    cafe.style.display =            "none";
    charenc.style.display =         "none";
    arami.style.display =           "none";
    kaskad.style.display =          "none";
    hakobyan.style.display =        "none";
    njdeh.style.display =           "none";
    zvartnoc.style.display =        "none";
    erebuni.style.display =         "none";
    megamol.style.display =         "none";
    slavonakan.style.display =      "none";
    lerkamar.style.display =        "none";
    vahram.style.display =          "none";
    erevancity.style.display =      "none";
    haravarevmtyan.style.display =  "none";
    navbandyan.style.display =      "none";
    politexnik.style.display =      "none";
    aramiancum.style.display =      "none";
    abovyancbox3.style.display =    "none";
    isahakyan.style.display =       "none";
    aleqmanukyan2.style.display =   "none";
    movsesxorenaci.style.display =  "none";
    TigranMec2.style.display =      "none";
    navbandyan2.style.display =     "none";
    amiryan.style.display =         "none";
    mashtoci21.style.display =      "none";
    tumanyan2.style.display =       "none";
    sayatnova.style.display =       "none";
    hyusisayinpoxota.style.display ="none";

    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48705.48806570037!2d44.584460677982335!3d40.27368419425681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1c3ec9f2329%3A0x5cee9f0e0c28a3b5!2z0JDQsdC-0LLRj9C9!5e0!3m2!1sru!2sam!4v1777917865620!5m2!1sru!2sam" `

});

ejmiacin.addEventListener("click",function(){

    erevan.classList.remove("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.add("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.remove("nshvac");

    drivethru.style.display =       "none";
    hoktemberyan.style.display =    "none";
    mhermkrtchyan.style.display =   "none";
    kirovakan.style.display =       "none";
    caxkadzorcafe.style.display =   "none";
    ejmiacincafe.style.display =    "flex";
    mashtoc.style.display =         "flex";
    abovyancbox2.style.display =    "none";
    pushkinGyumri.style.display =   "none";
    lennakan.style.display =        "none";

    // -------------------------
    TigranMec.style.display =       "none";
    komitas.style.display =         "none";
    abovyanbox.style.display =      "none";
    cicernakaberd.style.display =   "none";
    homplex.style.display =         "none";
    azatutyun.style.display =       "none";
    halabyan.style.display =        "none";
    tumanyan.style.display =        "none";
    kinomoskva.style.display =      "none";
    tigranpetrosyan.style.display = "none";
    moskovyan.style.display =       "none";
    saryan.style.display =          "none";
    aleqmanukyan.style.display =    "none";
    cafe.style.display =            "none";
    charenc.style.display =         "none";
    arami.style.display =           "none";
    kaskad.style.display =          "none";
    hakobyan.style.display =        "none";
    njdeh.style.display =           "none";
    zvartnoc.style.display =        "none";
    erebuni.style.display =         "none";
    megamol.style.display =         "none";
    slavonakan.style.display =      "none";
    lerkamar.style.display =        "none";
    vahram.style.display =          "none";
    erevancity.style.display =      "none";
    haravarevmtyan.style.display =  "none";
    navbandyan.style.display =      "none";
    politexnik.style.display =      "none";
    aramiancum.style.display =      "none";
    abovyancbox3.style.display =    "none";
    isahakyan.style.display =       "none";
    aleqmanukyan2.style.display =   "none";
    movsesxorenaci.style.display =  "none";
    TigranMec2.style.display =      "none";
    navbandyan2.style.display =     "none";
    amiryan.style.display =         "none";
    mashtoci21.style.display =      "none";
    tumanyan2.style.display =       "none";
    sayatnova.style.display =       "none";
    hyusisayinpoxota.style.display ="none";

    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48799.62306160411!2d44.27121077642668!3d40.14280849988931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94d18ed5f5ed%3A0xfbe8dc7387ca2136!2z0JLQsNCz0LDRgNGI0LDQv9Cw0YI!5e0!3m2!1sru!2sam!4v1777918023465!5m2!1sru!2sam`

});

caxkadzor.addEventListener("click",function(){

    erevan.classList.remove("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.add("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.remove("nshvac");

    drivethru.style.display =       "none";
    hoktemberyan.style.display =    "none";
    mhermkrtchyan.style.display =   "none";
    kirovakan.style.display =       "none";
    caxkadzorcafe.style.display =   "flex";
    ejmiacincafe.style.display =    "none";
    mashtoc.style.display =         "none";
    abovyancbox2.style.display =    "none";
    pushkinGyumri.style.display =   "none";
    lennakan.style.display =        "none";

    // -------------------------
    TigranMec.style.display =       "none";
    komitas.style.display =         "none";
    abovyanbox.style.display =      "none";
    cicernakaberd.style.display =   "none";
    homplex.style.display =         "none";
    azatutyun.style.display =       "none";
    halabyan.style.display =        "none";
    tumanyan.style.display =        "none";
    kinomoskva.style.display =      "none";
    tigranpetrosyan.style.display = "none";
    moskovyan.style.display =       "none";
    saryan.style.display =          "none";
    aleqmanukyan.style.display =    "none";
    cafe.style.display =            "none";
    charenc.style.display =         "none";
    arami.style.display =           "none";
    kaskad.style.display =          "none";
    hakobyan.style.display =        "none";
    njdeh.style.display =           "none";
    zvartnoc.style.display =        "none";
    erebuni.style.display =         "none";
    megamol.style.display =         "none";
    slavonakan.style.display =      "none";
    lerkamar.style.display =        "none";
    vahram.style.display =          "none";
    erevancity.style.display =      "none";
    haravarevmtyan.style.display =  "none";
    navbandyan.style.display =      "none";
    politexnik.style.display =      "none";
    aramiancum.style.display =      "none";
    abovyancbox3.style.display =    "none";
    isahakyan.style.display =       "none";
    aleqmanukyan2.style.display =   "none";
    movsesxorenaci.style.display =  "none";
    TigranMec2.style.display =      "none";
    navbandyan2.style.display =     "none";
    amiryan.style.display =         "none";
    mashtoci21.style.display =      "none";
    tumanyan2.style.display =       "none";
    sayatnova.style.display =       "none";
    hyusisayinpoxota.style.display ="none";

    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48518.159028767404!2d44.64086244718156!3d40.53308391618131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4040372fbbf79e93%3A0x9de1865a3f9cdf5a!2z0KbQsNGF0LrQsNC00LfQvtGAIDIzMTA!5e0!3m2!1sru!2sam!4v1777918169031!5m2!1sru!2sam`

});

vanadzor.addEventListener("click",function(){

    erevan.classList.remove("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.add("nshvac");
    armavir.classList.remove("nshvac");

    drivethru.style.display =       "none";
    hoktemberyan.style.display =    "none";
    mhermkrtchyan.style.display =   "flex";
    kirovakan.style.display =       "flex";
    caxkadzorcafe.style.display =   "none";
    ejmiacincafe.style.display =    "none";
    mashtoc.style.display =         "none";
    abovyancbox2.style.display =    "none";
    pushkinGyumri.style.display =   "none";
    lennakan.style.display =        "none";

    // -------------------------
    TigranMec.style.display =       "none";
    komitas.style.display =         "none";
    abovyanbox.style.display =      "none";
    cicernakaberd.style.display =   "none";
    homplex.style.display =         "none";
    azatutyun.style.display =       "none";
    halabyan.style.display =        "none";
    tumanyan.style.display =        "none";
    kinomoskva.style.display =      "none";
    tigranpetrosyan.style.display = "none";
    moskovyan.style.display =       "none";
    saryan.style.display =          "none";
    aleqmanukyan.style.display =    "none";
    cafe.style.display =            "none";
    charenc.style.display =         "none";
    arami.style.display =           "none";
    kaskad.style.display =          "none";
    hakobyan.style.display =        "none";
    njdeh.style.display =           "none";
    zvartnoc.style.display =        "none";
    erebuni.style.display =         "none";
    megamol.style.display =         "none";
    slavonakan.style.display =      "none";
    lerkamar.style.display =        "none";
    vahram.style.display =          "none";
    erevancity.style.display =      "none";
    haravarevmtyan.style.display =  "none";
    navbandyan.style.display =      "none";
    politexnik.style.display =      "none";
    aramiancum.style.display =      "none";
    abovyancbox3.style.display =    "none";
    isahakyan.style.display =       "none";
    aleqmanukyan2.style.display =   "none";
    movsesxorenaci.style.display =  "none";
    TigranMec2.style.display =      "none";
    navbandyan2.style.display =     "none";
    amiryan.style.display =         "none";
    mashtoci21.style.display =      "none";
    tumanyan2.style.display =       "none";
    sayatnova.style.display =       "none";
    hyusisayinpoxota.style.display ="none";

    iframe.src = `
   https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48312.760397069615!2d44.4337312344719!3d40.81593582254589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041bc1cc2a9ec57%3A0x34e4f0c6190c7ff4!2z0JLQsNC90LDQtNC30L7RgA!5e0!3m2!1sru!2sam!4v1777918297557!5m2!1sru!2sam
    
    `

});

armavir.addEventListener("click",function(){

    erevan.classList.remove("nshvac");
    bolor.classList.remove("nshvac")
    abovyan.classList.remove("nshvac");
    gyumri.classList.remove("nshvac");
    ejmiacin.classList.remove("nshvac");
    caxkadzor.classList.remove("nshvac");
    vanadzor.classList.remove("nshvac");
    armavir.classList.add("nshvac");

    drivethru.style.display =       "none";
    hoktemberyan.style.display =    "flex";
    mhermkrtchyan.style.display =   "none";
    kirovakan.style.display =       "none";
    caxkadzorcafe.style.display =   "none";
    ejmiacincafe.style.display =    "none";
    mashtoc.style.display =         "none";
    abovyancbox2.style.display =    "none";
    pushkinGyumri.style.display =   "none";
    lennakan.style.display =        "none";

    // -------------------------
    TigranMec.style.display =       "none";
    komitas.style.display =         "none";
    abovyanbox.style.display =      "none";
    cicernakaberd.style.display =   "none";
    homplex.style.display =         "none";
    azatutyun.style.display =       "none";
    halabyan.style.display =        "none";
    tumanyan.style.display =        "none";
    kinomoskva.style.display =      "none";
    tigranpetrosyan.style.display = "none";
    moskovyan.style.display =       "none";
    saryan.style.display =          "none";
    aleqmanukyan.style.display =    "none";
    cafe.style.display =            "none";
    charenc.style.display =         "none";
    arami.style.display =           "none";
    kaskad.style.display =          "none";
    hakobyan.style.display =        "none";
    njdeh.style.display =           "none";
    zvartnoc.style.display =        "none";
    erebuni.style.display =         "none";
    megamol.style.display =         "none";
    slavonakan.style.display =      "none";
    lerkamar.style.display =        "none";
    vahram.style.display =          "none";
    erevancity.style.display =      "none";
    haravarevmtyan.style.display =  "none";
    navbandyan.style.display =      "none";
    politexnik.style.display =      "none";
    aramiancum.style.display =      "none";
    abovyancbox3.style.display =    "none";
    isahakyan.style.display =       "none";
    aleqmanukyan2.style.display =   "none";
    movsesxorenaci.style.display =  "none";
    TigranMec2.style.display =      "none";
    navbandyan2.style.display =     "none";
    amiryan.style.display =         "none";
    mashtoci21.style.display =      "none";
    tumanyan2.style.display =       "none";
    sayatnova.style.display =       "none";
    hyusisayinpoxota.style.display ="none";

    iframe.src = `
    https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12197.666001044016!2d44.02500612580337!3d40.155279507338044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aefd7ce8a04cb%3A0x7c9d072842f1546b!2z0JDRgNC80LDQstC40YA!5e0!3m2!1sru!2sam!4v1777918469140!5m2!1sru!2sam
    `

});

hoktemberyan.onclick = () => {
    iframe.src= `
       https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12198.962315011804!2d44.021223459194175!3d40.14806202371428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aef300d50c42f%3A0x36959f0269916d6c!2sCoffee%20House%20Armavir!5e0!3m2!1sru!2sam!4v1777918375310!5m2!1sru!2sam
    `
    hoktemberyan.classList.add("back")
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