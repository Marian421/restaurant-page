
export default function homePage(){
    const container = document.querySelector("#content");
    console.log("rendering the hoome page");
    const something = document.createElement('div');
    something.textContent = "ceva";
    container.appendChild(something);

    const somethingElse = document.createElement("div");
    somethingElse.textContent = "altceva";
    container.appendChild(somethingElse);
}