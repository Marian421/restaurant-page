
export default function aboutPage() {
    const container = document.querySelector("#content");
   
    document.body.className = "";
    document.body.classList.add("background-1");

    const header = document.createElement("h1");
    header.textContent = "About The Haunted Feast 🕯️";

    container.appendChild(header);

    const para = ['Welcome, brave souls, to The Haunted Feast, where the veil between food and fright is delightfully thin. Hidden in the shadows of [Your City], we offer more than just a meal—it’s an otherworldly experience for those daring enough to enter our realm. From the eerie decor to the devilishly delicious dishes, we’ve brewed up a restaurant like no other.',
        'At The Haunted Feast, our mission is to transport you to a place where spooky meets spectacular. Our chefs blend the finest ingredients with a dash of dark magic, creating dishes that are as enchanting as they are eerie. Whether you’re craving Bat Wings, Mummy-Wrapped Ribeye, or our infamous Spiderweb Sundae, we promise a feast to die for—if you can survive the night!',
        'But don’t worry, our ghouls and goblins are always friendly (mostly), and our potions are brewed with care. Since opening our doors in [Year], we’ve been known for our playful twists on classic dishes, our immersive haunted atmosphere, and our warm (though ghostly) hospitality.'
    ]

    for(let i = 0; i < para.length; i++){
        const p = document.createElement("p");
        p.textContent = para[i];
        p.classList.add("about");
        container.appendChild(p);
    }
}