const home = function() {
    const navHome = document.getElementById('navhome');
    navHome.setAttribute("class", "active");

    const content = document.getElementById('content');
    content.replaceChildren();
    
    const home = document.createElement("div");
    home.setAttribute("id", "home");
    content.appendChild(home);

    const logo = document.createElement("img");
    logo.setAttribute("id", "logo");
    logo.setAttribute("src", "logo.png");
    home.appendChild(logo);

    const title = document.createElement("h1");
    const titleContent = document.createTextNode("The Original Denver");
    title.appendChild(titleContent);
    home.appendChild(title);

    const mainPic = document.createElement("img");
    mainPic.setAttribute("id", "pic");
    mainPic.setAttribute("src", "pic.png");
    home.appendChild(mainPic);

    const description = document.createElement("p");
    description.setAttribute("id", "description");
    const descriptionContent = document.createTextNode("Our creative, elevated food and beverage program combines satisfying staples with imaginative twists. From boozy brunches and happy hours to family dinners, special occasions and everything in between, The Original has something for everyone.");
    description.appendChild(descriptionContent);
    home.appendChild(description);
}

export { home };