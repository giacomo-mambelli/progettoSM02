
var resultDiv;
var i = 0;

function scanned(text) {
    resultDiv = document.querySelector("#results");
    document.getElementById("personaggio").innerHTML = text;

    if (text == "baymax") {
        document.getElementById("baymaxIMG").style.visibility = 'visible';
        i = 1;
        localStorage.baymax = "true";
    }
    else if (text == "pikachu") {
        document.getElementById("pikachuIMG").style.visibility = 'visible';
        i = 2;
        localStorage.pikachu = "true";
    }
    else if (text == "finnjake") {
        document.getElementById("finnjakeIMG").style.visibility = 'visible';
        i = 3;
        localStorage.finnjake = "true";
    }
    else if (text == "minions") {
        document.getElementById("minionsIMG").style.visibility = 'visible';
        i = 4;
        localStorage.minions = "true";
    }
    else if (text == "totodile"){
        document.getElementById("totodileIMG").style.visibility = 'visible';
        i= 5;
        localStorage.totodile = "true";
    }
       else if (text == "gengar"){
        document.getElementById("gengarIMG").style.visibility = 'visible';
        i= 6;
        localStorage.gengar = "true";
    }
        else if (text == "psiduck"){
        document.getElementById("psiduckIMG").style.visibility = 'visible';
        i= 7;
        localStorage.psiduck = "true";
    }
        else if (text == "homer"){
        document.getElementById("homerIMG").style.visibility = 'visible';
        i= 8;
        localStorage.homer = "true";
    }
        else if (text == "iceking"){
        document.getElementById("icekingIMG").style.visibility = 'visible';
        i= 9;
        localStorage.iceking = "true";
    }
    if (i > 0 && text != "") {
        resultDiv.style.visibility = 'visible';
    }
    else { 
        if (text == ""){ window.location = "mainMenu.html";}
        document.getElementById("wrong").style.visibility = 'visible';
        document.getElementById("loading").style.visibility = 'hidden';
    }
}

document.getElementById("buttonOK").onclick = function () {
    resultDiv.style.visibility = 'hidden';
    var images = document.getElementsByClassName('personaggi'), i;
    for (var i = 0; i < images.length; i++) {
        images[i].style.visibility = 'hidden';
    }
window.location.href = 'mainMenu.html';
};