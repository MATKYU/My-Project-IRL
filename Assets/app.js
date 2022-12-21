// Navbar sticky
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})

// Navbar burger 
let burgerOpen = document.querySelector(".burger-open");
let burgerClose = document.querySelector(".burger-close");
let header = document.querySelector("header");

burgerOpen.addEventListener('click', function () {
    header.classList.toggle("open");
})

burgerClose.addEventListener('click', function () {
    header.classList.toggle("open");
})

//DROPDOWN 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}