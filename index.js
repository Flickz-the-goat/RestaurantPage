import './styles.css';
import homer from './src/home.js';
import menur from './src/menu.js';
import aboutr from './src/about.js';

// Get DOM elements
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");

// Load home page by default
document.addEventListener('DOMContentLoaded', () => {
    homer();
});

// Add event listeners
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    homer();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menur();
});

aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    aboutr();
});