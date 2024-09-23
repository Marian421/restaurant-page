import "./styles.css";
import homePage from "./home";
import aboutPage from "./about";
import menuPage from "./menu";
import logo from "./logo";

logo();
homePage();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

function clearContainer(){  
    const container = document.querySelector("#content");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

homeButton.addEventListener("click", () => {
    clearContainer();
    homePage();
})

menuButton.addEventListener("click", () => {
    clearContainer();
    menuPage();
})

aboutButton.addEventListener("click", () => {
    clearContainer();
    aboutPage();
})