
var content;
var div = document.getElementById("prova");
document.addEventListener("deviceready", init, false);

function init() {
    if (localStorage.baymax =="true") {
        document.getElementById("img1").innerHTML = '<img id="baymax2" src="img/personaggi/baymax2.png" />';
    }
    else {
        document.getElementById("img1").innerHTML = '<img src="img/personaggi/baymax1.png" alt="" id="baymax" />';
    }
    if (localStorage.pikachu == "true") {
        document.getElementById("img2").innerHTML = '<img src="img/personaggi/pikachu2.png" alt="" id="pikachu2" />';
    }
    else {
        document.getElementById("img2").innerHTML = '<img src="img/personaggi/pikachu.png" alt="" id="pikachu" />';
    }
    if (localStorage.finnjake == "true") {
        document.getElementById("img3").innerHTML =  '<img src="img/personaggi/finnjake2.png" alt="" id="finn2" />';
    }
    else {
        document.getElementById("img3").innerHTML =  '<img src="img/personaggi/FinnJake1.png" alt="" id="finn" />';
    }
    if (localStorage.minions == "true") {
        document.getElementById("img4").innerHTML =  '<img src="img/personaggi/minion2.png" alt="" id="minion2" />';
    }
    else {
        document.getElementById("img4").innerHTML =  '<img src="img/personaggi/minion1.png" alt="" id="minion" />';
    }
      if (localStorage.totodile == "true") {
        document.getElementById("img5").innerHTML =  '<img src="img/personaggi/totodile2.png" alt="" id="totodile2" />';
    }
    else {
        document.getElementById("img5").innerHTML =  '<img src="img/personaggi/totodile1.png" alt="" id="totodile" />';
    }
         if (localStorage.gengar == "true") {
        document.getElementById("img6").innerHTML =  '<img src="img/personaggi/gengar2.png" alt="" id="gengar2" />';
    }
    else {
        document.getElementById("img6").innerHTML =  '<img src="img/personaggi/gengar1.png" alt="" id="gengar" />';
    }
             if (localStorage.psiduck == "true") {
        document.getElementById("img7").innerHTML =  '<img src="img/personaggi/psiduck2.png" alt="" id="psiduck2" />';
    }
    else {
        document.getElementById("img7").innerHTML =  '<img src="img/personaggi/psiduck1.png" alt="" id="psiduck" />';
    }
    if (localStorage.homer == "true") {
        document.getElementById("img8").innerHTML =  '<img src="img/personaggi/homer2.png" alt="" id="homer2" />';
    }
    else {
        document.getElementById("img8").innerHTML =  '<img src="img/personaggi/homer1.png" alt="" id="homer" />';
    }
    if (localStorage.iceking == "true") {
        document.getElementById("img9").innerHTML =  '<img src="img/personaggi/iceking2.png" alt="" id="iceking2" />';
    }
    else {
        document.getElementById("img9").innerHTML =  '<img src="img/personaggi/iceking1.png" alt="" id="iceking" />';
    }
    
}