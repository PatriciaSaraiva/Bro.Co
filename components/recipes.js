
const recipesBoxes = [
  {
    ingredientsTitle: "Ingredients:",
    imagesUrl: "../images/beef_wellington.jpg",
    ingredients: [
                  "1 red onion", "250 g mixed mushrooms", "1 x 230 g higher-welfare fillet steak", "olive oil", "½ a bunch of thyme , (10g)",
                  "2 large free-range eggs", "1 mug of plain flour , plus extra for dusting", "100 g baby spinach", "1 x 320 g sheet of all-butter puff pastry"
                 ],
                 processTitle: "Beef Wellington for 2",
                 process: [
                   "Peel the onion and roughly chop with the mushrooms. Put a 30cm non-stick frying pan on a high heat. Season the steak with sea salt and plenty of black pepper and rub with 1 teaspoon of olive oil",
                   "Turning with tongs, sear the steak all over for 2 minutes in total, then remove to a plate. Return the pan to a medium heat with the onion and mushrooms. ",
                   "Strip in the thyme. Cook for 15 minutes, or until soft, stirring regularly. Blitz in a food processor until spreadable, season to perfection, and remove.",
                   "Blitz 1 egg, the flour, spinach, a pinch of salt and 1 mug of water in the processor until smooth. Put your pan back on a medium heat, rub with oil, then pour in a thin layer of batter. ",
                   "Cook for 1 minute on each side without colour. Tip on to a plate to cool. Cover the leftover batter and chill for breakfast or brunch.",
                   "Preheat the oven to 220°C. Sit your pancake on a large sheet of clingfilm. Evenly spread over the mushroom pâté. Place the steak in the centre, then gather up the clingfilm and twist into a parcel. ",
                   "Sit the wrapped steak (clingfilm discarded) on the pastry, 2cm from one side. Eggwash all the pastry, then fold and mould the excess over the wrapped steak, leaving a pastry border around it.",
                   "Trim to 2cm, pinch the edges to seal, eggwash, and decorate with the trimmings, if you like. ", 
               "Cook on the bottom of the oven for 25 minutes, or until the pastry is golden on top and crispy underneath, for blushing, juicy beef. Rest for 2 minutes, then serve."
              ],
              color: "bg-color1" ,      
              id: "meat-section"
            },
            {
    ingredientsTitle: "Ingredients:",
    imagesUrl: "../images/salmon_cooked.jpg",
    ingredients: [ 
      "600 g new potatoes", "200 g fine green beans", "200 g tenderstem broccoli", "4 x 120 g salmon fillets", 
      "olive oil", "PESTO:", "25 g pine nuts", "½ a small clove of garlic", "50 g fresh basil","15 g Parmesan cheese", 
      "2 lemons"
    ],
    processTitle: "Salmon & pesto-dressed veg",
    process: [
              "For the pesto, peel the garlic and add half to a jug with the pine nuts. Pick in the basil leaves and blitz until finely chopped.",
              "Add 2 to 3 tablespoons of extra virgin olive oil, then finely grate and stir through the Parmesan",
              "Give the mixture a final blitz,then halve the lemon and add a squeeze of juice to taste, then season with a pinch of black pepper.",
              "Scrub the potatoes, then trim the beans and broccoli. Cook the potatoes in a large pan of boiling salted water for 15 minutes, adding the beans and the broccoli for the final 5 minutes", 
              "Heat a large non-stick frying pan over a high heat. Rub the salmon fillets all over with olive oil and season with salt and pepper and cook for 4 minutes",
              "Turn the fillets over, then cook for a further 2 to 3 minutes. Remove the pan from the heat, rest for 30 seconds,add a good squeeze of lemon juice and give the pan a shake.",
              "Drain the vegetables well, then tip into a large bowl. Add the pesto, then toss to coat.",
              "Divide the salmon and vegetables between plates, drizzle over the pan juices, then cut the remaining lemon into wedges for squeezing over."
            ],
            color: "bg-color2",         
            id: "fish-section"
          },
          {
            ingredientsTitle: "Ingredients:",

    imagesUrl: "../images/BFV13909_BakedRatatouille-ThumbTextless1080.jpg",
    ingredients: [
      "2 red onions", "4 cloves of garlic", "2 aubergines", "3 courgettes", "3 red or yellow peppers", "6 ripe tomatoes", "½ a bunch of fresh basil , (15g)",
      "olive oil", "a few sprigs of fresh thyme", "1 x 400 g tin of quality plum tomatoes", "1 tablespoon balsamic vinegar", "½ a lemon"
    ],
    processTitle: "Classic Ratatouille",
    process: [
      "Peel and cut the onions into wedges, then peel and finely slice the garlic. Trim the aubergines and courgettes, deseed the peppers and chop. Chop the tomatoes., then finely slice the stalks.",
      "Heat 2 tablespoons of oil in a pan over a medium heat, add the chopped aubergines, courgettes and peppers and fry for around 5 minutes. Spoon the cooked veg into a large bowl.",
      "To the pan, add the onion, garlic, basil stalks and thyme leaves with another drizzle of oil, if needed. Fry for 10 to 15 minutes, or until softened and golden.",
      "Return the cooked veg to the pan and stir in the fresh and tinned tomatoes, the balsamic and a good pinch of sea salt and black pepper.",
      "Mix well, breaking up the tomatoes with the back of a spoon. Cover the pan and simmer over a low heat for 30 to 35 minutes, or until reduced, sticky and sweet.",
      "Tear in the basil leaves, finely grate in the lemon zest and adjust the seasoning, if needed. Serve with a hunk of bread or steamed rice."
    ],              
    color: "bg-color3",
    id: "veggie-section"             
  }
];



const boxes = document.querySelector(".boxes");

function createBox(ingredientsTitle, imagesUrl, ingredients, processTitle, process, bgColor, id) {
  const boxContainer = document.createElement("div");
  boxContainer.classList.add("boxContainer");
  boxContainer.classList.add(bgColor);
  boxContainer.setAttribute("id", id);
  boxes.appendChild(boxContainer);
  
  const box = document.createElement("div");
  box.classList.add("box");
  boxContainer.appendChild(box);


  const boxHeader = document.createElement("div");
  boxHeader.classList.add("box-header");
  box.appendChild(boxHeader);
  
  const boxImg = document.createElement("div");
  boxImg.style.backgroundImage = `url(${imagesUrl})`;
  boxImg.classList.add("box-img");
  boxHeader.appendChild(boxImg);

  const boxBody = document.createElement("div");
  boxBody.classList.add("box-body");
  box.appendChild(boxBody);

  const boxTitle = document.createElement("h2");
  boxTitle.classList.add("box-title");
  boxTitle.innerHTML = ingredientsTitle;
  boxBody.appendChild(boxTitle);

  const boxList = document.createElement("ul");
  boxList.classList.add("box-list");

  for (let i = 0; i < ingredients.length; i++) {
    const uList = document.createElement("li");
    uList.innerHTML = ingredients[i];
    boxList.appendChild(uList);
  }

  boxBody.appendChild(boxList);

  const boxSide = document.createElement("div");
  boxSide.classList.add("box-aside");
  boxContainer.appendChild(boxSide);

  const boxHeader1 = document.createElement("h1");
  boxHeader1.classList.add("box-header1");
  boxHeader1.innerHTML = processTitle;
  boxSide.appendChild(boxHeader1);

  const boxRecipe = document.createElement("ul");
  boxRecipe.classList.add("process-list");

  for (let i = 0; i < process.length; i++) {
    const proList = document.createElement("li");
    proList.innerHTML = process[i];
    boxRecipe.appendChild(proList);
  }
  
  boxHeader1.appendChild(boxRecipe);

}

for (let i = 0; i < recipesBoxes.length; i++) {
  createBox(
    recipesBoxes[i].ingredientsTitle,
    recipesBoxes[i].imagesUrl,
    recipesBoxes[i].ingredients,
    recipesBoxes[i].processTitle,
    recipesBoxes[i].process,
    recipesBoxes[i].color,
    recipesBoxes[i].id
  );
}