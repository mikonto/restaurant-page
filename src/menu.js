function setNavStyling() {
    const navHome = document.getElementById('navhome');
    const navMenu = document.getElementById('navmenu');
    const navContact = document.getElementById('navcontact');

    navHome.removeAttribute("class", "active");
    navMenu.removeAttribute("class", "active");
    navContact.removeAttribute("class", "active");

    navMenu.setAttribute("class", "active");
}

const menu = function() {
    setNavStyling();

    const content = document.getElementById('content');

    content.replaceChildren();
    
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    content.appendChild(menu);

    const header = document.createElement("h1");
    const headerContent = document.createTextNode("Menu");
    header.appendChild(headerContent);
    menu.appendChild(header);

// SANDWICH
    const sandwichTitle = document.createElement("h3");
    const sandwichTitleContent = document.createTextNode("Breakfast Sandwich:");
    sandwichTitle.appendChild(sandwichTitleContent);
    menu.appendChild(sandwichTitle);

    const sandwich = document.createElement("p");
    const sandwichContent = document.createTextNode("Everything Bagel, Bacon, Taylor Ham, Egg, American Cheese. 14€.");
    sandwich.appendChild(sandwichContent);
    menu.appendChild(sandwich);

// CHEESEBURGER
    const cheeseBurgerTitle = document.createElement("h3");
    const cheeseBurgerTitleContent = document.createTextNode("All-American Cheeseburger:");
    cheeseBurgerTitle.appendChild(cheeseBurgerTitleContent);
    menu.appendChild(cheeseBurgerTitle);

    const cheeseBurger = document.createElement("p");
    const cheeseBurgerContent = document.createTextNode("100% Angus Beef, American Cheese,OG Special Sauce, Lettuce, Tomato, Onion Pickles, Brioche Bun. 20€");
    cheeseBurger.appendChild(cheeseBurgerContent);
    menu.appendChild(cheeseBurger);

// THE BUSINESS LUNCH
    const businessLunchTitle = document.createElement("h3");
    const businessLunchTitleContent = document.createTextNode("The Business Lunch:");
    businessLunchTitle.appendChild(businessLunchTitleContent);
    menu.appendChild(businessLunchTitle);

    const businessLunch = document.createElement("p");
    const businessLunchContent = document.createTextNode("Choose Your Sandwich | Choose 2: Soup du Jour, Fries, Side Salad | Soft Drink or Iced Tea. 20€");
    businessLunch.appendChild(businessLunchContent);
    menu.appendChild(businessLunch);

// THE BUSINESS LUNCH
    const toastTitle = document.createElement("h3");
    const toastTitleContent = document.createTextNode("Avocado Toast:");
    toastTitle.appendChild(toastTitleContent);
    menu.appendChild(toastTitle);

    const toast = document.createElement("p");
    const toastContent = document.createTextNode("Avocado, Pickled Onion, Kale, Poached Egg, Sundried Tomato, Green Goddess, Sourdough. 15€");
    toast.appendChild(toastContent);
    menu.appendChild(toast);
}

export { menu };