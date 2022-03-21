const cards = document.querySelector(".cards");

const utensilsCards = [
  {
    name: "Salmon & Pesto-dressed veg",
    picture: "../images/salmon.jpg",
    utensils: "Utensils: large pan, frying pan, food processor.",
    time: "&#x1F551 30min"
  },

  {
    name: "Classic ratatouille",
    picture: "../images/courgette.jpg",
    utensils: "Utensils: large casserole pan or saucepan.",
    time: "&#x1F551 1h.15min."
  }
];

function createCard(title, imageUrl, list, time) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  const cardList = document.createElement("h3");
  cardList.classList.add("card-h3");
  cardList.innerHTML = list;
  cardTitle.appendChild(cardList);

  const cardTime = document.createElement("p");
  cardTime.classList.add("cardTime");
  cardTime.innerHTML = time;
  cardList.appendChild(cardTime);

}

for (let i = 0; i < utensilsCards.length; i++) {
  createCard(
    utensilsCards[i].name,
    utensilsCards[i].picture,
    utensilsCards[i].utensils,
    utensilsCards[i].time
  );
}