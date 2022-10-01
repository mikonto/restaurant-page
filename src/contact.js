function setNavStyling() {
    const navHome = document.getElementById('navhome');
    const navMenu = document.getElementById('navmenu');
    const navContact = document.getElementById('navcontact');

    navHome.removeAttribute("class", "active");
    navMenu.removeAttribute("class", "active");
    navContact.removeAttribute("class", "active");

    navContact.setAttribute("class", "active");
} 

const contact = function() {
    setNavStyling();

    const content = document.getElementById('content');

    content.replaceChildren();
    
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    content.appendChild(menu);

    const header = document.createElement("h1");
    const headerContent = document.createTextNode("Contact");
    header.appendChild(headerContent);
    menu.appendChild(header);

    const hours = document.createElement("h3");
    const hoursContent = document.createTextNode("Hours:");
    hours.appendChild(hoursContent);
    menu.appendChild(hours);

    const hoursRow1 = document.createElement("p");
    const hoursRow1Content = document.createTextNode("Tuesday-Friday: 10:00-22:00");
    hoursRow1.appendChild(hoursRow1Content);
    menu.appendChild(hoursRow1);

    const hoursRow2 = document.createElement("p");
    const hoursRow2Content = document.createTextNode("Saturday: 8:00-22:00");
    hoursRow2.appendChild(hoursRow2Content);
    menu.appendChild(hoursRow2);

    const hoursRow3 = document.createElement("p");
    const hoursRow3Content = document.createTextNode("Sunday: 8:00-15:00");
    hoursRow3.appendChild(hoursRow3Content);
    menu.appendChild(hoursRow3);

    const hoursRow4 = document.createElement("p");
    const hoursRow4Content = document.createTextNode("Happy Hour: 15:00-18:00");
    hoursRow4.appendChild(hoursRow4Content);
    menu.appendChild(hoursRow4);

    const hoursRow5 = document.createElement("p");
    const hoursRow5Content = document.createTextNode("Closed Mondays");
    hoursRow5.appendChild(hoursRow5Content);
    menu.appendChild(hoursRow5);

    const locat = document.createElement("h3");
    const locatContent = document.createTextNode("Location:");
    locat.appendChild(locatContent);
    menu.appendChild(locat);

    const address = document.createElement("p");
    const addressContent = document.createTextNode("1600 20th St, Denver, CO 80202");
    address.appendChild(addressContent);
    menu.appendChild(address);
}

export { contact };