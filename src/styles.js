const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const content = document.querySelector("#content");
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

home(); //default home

home.addEventListener("click", () => {
    content.innerHTML = "";
    home(); 
});
menu.addEventListener("click", () => {
    content.innerHTML = "";
    menu(); 
});
about.addEventListener("click", () => {
    content.innerHTML = "";
    about(); 
});