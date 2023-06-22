/* window.addEventListener("scroll", removeBackgroundFunction) = 
    removeBackgroundFunction();

function removeBackgroundFunction() {
    document.getElementById("barra-topo").style.removeProperty("background-color")
} */

/* aplicar código abaixo se o objetivo for fazer sumir a barra + texto (não apenas a barra) */


/* window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop) {
        document.getElementById("barra-topo").style.top = "0";
    } else {
        document.getElementById("barra-topo").style.top = "-100px";
    }
} */

window.onscroll = function addBackgroundFunction() {
    /* var scroll = window.scrollY; */
    var barraTopo = document.getElementById("barra-topo");

    if (document.documentElement.scrollTop) {
        
        barraTopo.style.backgroundColor = "rgb(94, 86, 86)";
    //abaixo nao funciona - ver como tirar a cor quando sobe de novo
    } else {
        barraTopo.style.removeProperty("background-color");
    }
 }