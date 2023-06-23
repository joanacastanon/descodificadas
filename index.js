window.onscroll = function addBackgroundFunction() {
    /* var scroll = window.scrollY; */
    var navbar = document.getElementById("navbar");

    if (document.documentElement.scrollTop) {
        navbar.style.backgroundColor = "rgba(79,71,78,1)";
    } else {
        navbar.style.removeProperty("background-color");
    }
 }