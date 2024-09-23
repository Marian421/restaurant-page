export default function homePage(){
    const container = document.querySelector("#content");

    document.body.className = "";
    document.body.classList.add("background-2");

    const firstHeader = document.createElement('h2');
    firstHeader.textContent = "Welcome to The Haunted Feast!";

    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = "Step inside... if you dare. This isn't your ordinary dining experience--our ghostly dished and eerie atmosphere are sure to send chills down your spine. Whether you're a fearless foddies or a cautious creature, we've conjured up a menu that's as delicious as it is sinister.";

    const welcome = document.createElement("div");
    welcome.classList.add("group");
    welcome.appendChild(firstHeader);
    welcome.appendChild(firstParagraph);
    container.appendChild(welcome);

    const secondHeader = document.createElement('h2');
    secondHeader.textContent = "🕸️ Dare to Taste the Darkness 🕸️";

    const secondParagraph = document.createElement("p");
    secondParagraph.textContent = "Our chefs have brewed potions and cast culinary spells to bring you otherworldly flavors. From Bat Wings to Mummy-Wrapped Ribeye, every bite is sure to haunt your taste buds. Ready to face the Swamp Creature's Swirl or sip on Dracula’s Blood Punch? Choose wisely, for the night is full of terror.";

    const secondDiv = document.createElement('div');
    secondDiv.classList.add("group");
    secondDiv.appendChild(secondHeader);
    secondDiv.appendChild(secondParagraph);
    container.appendChild(secondDiv);

    const thirdHeader = document.createElement('h2');
    thirdHeader.textContent = "🕷️ Reservations & Rituals 🕷️";

    const thirdParagraph = document.createElement("p");
    thirdParagraph.textContent = "Planning a frightful feast with friends or a spine-tingling dinner for two? Book your table and prepare for a dining experience like no other. But beware—once you enter, there's no turning back.";

    const thirdDiv = document.createElement('div');
    thirdDiv.classList.add("group");
    thirdDiv.appendChild(thirdHeader);
    thirdDiv.appendChild(thirdParagraph);
    container.appendChild(thirdDiv);
}