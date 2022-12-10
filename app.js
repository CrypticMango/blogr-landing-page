//nav menu for mobile

const burger = document.getElementById("that-burger-b");
const close = document.getElementById("close-b");
const nav = document.getElementById("navigation");

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

function openMenu() {
    nav.style.display = "block";
    close.style.display = "block"
    burger.style.display = "none"
}

function closeMenu() {
    nav.style.display = "none"
    close.style.display = "none"
    burger.style.display = "block"
}

//nav menu for desktop

const navButton = document.getElementById("nav-button");
const navSubmenu = document.getElementById("subnav-content");

navButton.addEventListener("click", openNav);

function openNav() {
    navSubmenu.style.display = "block";
}

console.log(navSubmenu)