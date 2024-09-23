export default function menuPage() {
    const container = document.querySelector("#content");
    document.body.className = "";
    document.body.classList.add("background-1"); 

    const starters = document.createElement("h1");
    starters.textContent = "Starters 🕸️";

    const startersHeaders = ["Ghostly Gazpacho", "Bat Wings", "Creepy Cauldron Dip", "Pumpkin Patch Bites" ] ;
    const starterParagraphs = ['A chilled tomato soup haunted by a swirl of phantom garlic cream and served with crispy "tombstone" croutons.'
        , 'Spicy charred chicken wings marinated in a secret black potion. Beware, they bite back!'
        , 'A bubbling hot cheese cauldron filled with roasted ghoulish green jalapeños and served with “witches’ finger” breadsticks.'
        , 'Deep-fried pumpkin fritters dusted with savory ghost pepper salt. Perfect for sharing... or stealing!'];

    const pricesSection1 = ["$8.99", "$12.99", "$10.99","$9.99"];
    const section1 = document.createElement("div");
    section1.appendChild(starters);

    for( let i = 0; i < startersHeaders.length ; i++)
    {
        const subheader = document.createElement("h2");
        subheader.textContent = startersHeaders[i];
        subheader.classList.add("subheader");
        const paragraph = document.createElement("p");
        paragraph.textContent = starterParagraphs[i];
        paragraph.classList.add("paragraph");
        const price = document.createElement("p");
        price.textContent = pricesSection1[i];
        price.classList.add("price");

        section1.appendChild(subheader);
        section1.appendChild(paragraph);
        section1.appendChild(price);

        container.appendChild(section1);
    }
}