import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

document.getElementById("navhome").addEventListener("click", home);

document.getElementById("navmenu").addEventListener("click", menu);

document.getElementById("navcontact").addEventListener("click", contact);

home(); 