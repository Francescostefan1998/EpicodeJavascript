//Carbonara recipe//
let spaghetti = 400;
let guanciale = 250;
let veryfresheggyolks = 6;
let PecorinoRomanocheese = 50;
let rawblackpepper = 4;
let salt = 20;
let waterwithoutsalt = 4000;
console.log("Recipe for Carbonara");
console.log("Products");
console.log("Spaghetti ", spaghetti, "grams");
console.log("Egg yolks ", veryfresheggyolks,);
console.log("Pecorino ", PecorinoRomanocheese, "grams");
console.log("Raw black pepper", rawblackpepper, "grams");
console.log("Salt ", salt, "grams");
console.log("Water ", waterwithoutsalt, "grams");
console.log("Procedure");

//To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.//
//Combine the egg yolks with the finely grated Pecorino Romano.//
let saucepecorinoandeggs = veryfresheggyolks * 30 + PecorinoRomanocheese;
console.log("Add the pecorino and the egg yolks and obtain ", saucepecorinoandeggs, "grams of sauce");
//Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.//
let saucecomplete = saucepecorinoandeggs + rawblackpepper / 2;
console.log("In order to complete the preparation of the sauce add half of the pepper at the rest of the sauce and obtain ", saucecomplete, "grams of sauce" );
//Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.//
//Cook the pasta with a pinch of salt in the water (guanciale is already very salty);set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.//
//Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:this will create a creamy sauce with the pasta starch contained in that water.TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.//
let spoon = 15
let water = waterwithoutsalt + salt;
let pasta = spaghetti * 1.8 + salt / 10 ;
let pastawithwater = pasta + spoon * 2 ;
console.log("Add the salt to the pasta, cook it and after it absorb some water and you add 2 spoons of water you will get ", pastawithwater, "grams of pasta");
//Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs//
let pastawithsauce = pastawithwater + saucecomplete;
//Add the remaining roasted black pepper and serve immediately.//
let carbonara = pastawithsauce + rawblackpepper / 2 + guanciale;
console.log("Add the cooked pasta with the sauce and the guanciale and obtain ", carbonara, "grams of Carbonara");
