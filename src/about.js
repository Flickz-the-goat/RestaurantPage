const content = document.querySelector("#content");
const about = document.createElement("div");
about.id = "about";

const title = document.createElement("div");
title.id = "title";
title.textContent = "About";

const description = document.createElement("div");
description.id = "description";
description.textContent = "This is the about page";

const contact = document.createElement("div");
contact.id = "contact";
contact.textContent = "Contact";


function aboutr(){
    about.appendChild(title);
    about.appendChild(description);
    about.appendChild(contact);
    content.appendChild(about);
}

export default aboutr;