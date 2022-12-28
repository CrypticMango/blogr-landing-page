//nav menu for mobile

const burger = document.getElementById("that-burger-b");
const close = document.getElementById("close-b");
const nav = document.getElementById("navigation");

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

function openMenu() {
    nav.style.display = "block";
    close.style.display = "block";
    burger.style.display = "none";
}

function closeMenu() {
    nav.style.display = "none";
    close.style.display = "none";
    burger.style.display = "block";
}

//nav menu for desktop

const navButtonOne = document.getElementById("nav-button-one");
const navButtonTwo = document.getElementById("nav-button-two");
const navButtonThree = document.getElementById("nav-button-three");

const navSubmenuOne = document.getElementById("subnav-content-one");
const navSubmenuTwo = document.getElementById("subnav-content-two");
const navSubmenuThree = document.getElementById("subnav-content-three");

navButtonOne.addEventListener("click", openNavOne);
navButtonTwo.addEventListener("click", openNavTwo);
navButtonThree.addEventListener("click", openNavThree);

function openNavOne() {
    navSubmenuOne.style.display = "block";
    navSubmenuTwo.style.display = "none";
    navSubmenuThree.style.display = "none";
}
function openNavTwo() {
    navSubmenuOne.style.display = "none";
    navSubmenuTwo.style.display = "block";
    navSubmenuThree.style.display = "none";
}
function openNavThree() {
    navSubmenuOne.style.display = "none";
    navSubmenuTwo.style.display = "none";
    navSubmenuThree.style.display = "block";
}

const subNav = document.querySelectorAll(".nav-item");

subNav.forEach((item) => {item.addEventListener("click", () => {
    navSubmenuOne.style.display = "none";
    navSubmenuTwo.style.display = "none";
    navSubmenuThree.style.display = "none";
})})