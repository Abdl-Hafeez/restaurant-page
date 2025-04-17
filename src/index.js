import "./style.css"
import { homeLoad } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn  = document.getElementById('about-btn');

function clear() {
    const content = document.getElementById('content');
    content.textContent = "";
}

homeBtn.addEventListener('click', () => {
    clear();
    homeLoad();
});
menuBtn.addEventListener('click', () => {
    clear();
    loadMenu();
});
aboutBtn.addEventListener('click', () => {
    clear();
    loadContact();
});

homeLoad();


