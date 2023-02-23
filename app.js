let navbar = document.getElementById("nav");
let navToggle = document.getElementById("toggle");
let navMenu = document.getElementById("menu");

navToggle.onclick = function(){
    navbar.classList.toggle("show-nav");
    navMenu.classList.toggle("fa-xmark");
}


