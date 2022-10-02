import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

function resetNavStyling() {
    const navHome = document.getElementById('navhome');
    const navMenu = document.getElementById('navmenu');
    const navContact = document.getElementById('navcontact');

    navHome.removeAttribute("class", "active");
    navMenu.removeAttribute("class", "active");
    navContact.removeAttribute("class", "active");
}

function resetContent() {
    const content = document.getElementById('content');
    content.replaceChildren();
}

document.getElementById("navhome").addEventListener('click',() => {    
    resetNavStyling();
    resetContent();
    home();
});

document.getElementById("navmenu").addEventListener('click',() => {    
    resetNavStyling();
    resetContent();
    menu();
});

document.getElementById("navcontact").addEventListener('click',() => {    
    resetNavStyling();
    resetContent();
    contact();
});

home();