export default function logo(){
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    logoDiv.textContent = "THE HAUNTED FEAST";
    document.querySelector("header").appendChild(logoDiv);

    // the same node cannot exist in multiple positions so it's removed from the current possition
    // and moved to the end of the list
    // like this we swap the order of nav and logo inside the header element
    document.querySelector("header").appendChild(document.querySelector("header").firstElementChild);
 }