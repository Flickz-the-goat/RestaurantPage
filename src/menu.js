import cookies from "./OIP.jpeg";
const content = document.querySelector("#content");
const menu = document.createElement("div");
menu.id = "menu";

const title = document.createElement("div");
title.id = "title";
title.textContent = "Menu";

const menuItems = document.createElement("div");
menuItems.id = "menu-items";

for (let i = 0; i < 4; i++) {
    const item = document.createElement("div");
    item.id = "items";

    const img = document.createElement("img");
    img.src = cookies;
    img.alt = "item";
    img.id = "item";

    const description = document.createElement("div");
    description.id = "description";
    description.textContent = "Description";

    const price = document.createElement("div");
    price.id = "price";
    price.textContent = "$ 6.99";

    const writing = document.createElement("div");
    writing.id = "writing";
    writing.appendChild(price);
    writing.appendChild(description);

    item.appendChild(img);
    item.appendChild(writing);
    menuItems.appendChild(item);
}

menu.appendChild(title);
menu.appendChild(menuItems);

function menur(){
    content.appendChild(menu);
}

export default menur;