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