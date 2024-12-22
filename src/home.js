import cookies from "./OIP.jpeg";
// makes the home content and exports it 
    const content = document.querySelector("#content");
const home = document.createElement("div");
home.id = "home";

//making the title of the page
const title = document.createElement("div");
const id = "title";
title.textContent = "Welcome to Ani Makes Cookies";

//getting the image
const img = document.createElement("img");
img.src = cookies;
img.alt = "cookies";
//getting the description
const description = document.createElement("div");
description.id = "description";
description.textContent = "We make the best cookies in the world!";

function homer() {
    home.appendChild(title);
    home.appendChild(img);
    home.appendChild(description);
    content.appendChild(home);
}

export default homer;