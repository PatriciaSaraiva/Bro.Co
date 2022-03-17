const cards = document.querySelector(".cards-container");

const utensilsYouNeed = [
    {
        utensilsTitle: "Utensils to prepare our Salmon",
        utensil1: "Large pan",
        utensil2: "Frying pan",
        utensil3: "Food processor",
        picture: "../images/salmon.jpg"
    }
]

function createCard(title, list, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards-container.appendChild(card);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;
    cardBody.appendChild(cardTitle);

    const cardList = document.createElement("ul");
    cardList.classList.add("card-list");
    cardBody.appendChild(cardList);

}

for (let i = 0; i < utensilsYouNeed.length; i++) {
    createCard(utensilsYouNeed[i].utensilsTitle,
         utensilsYouNeed[i].utensil1, 
         utensilsYouNeed[i].utensil2, 
         utensilsYouNeed[i].utensil3, 
         utensilsYouNeed[i].picture);
}