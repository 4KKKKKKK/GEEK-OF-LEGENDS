import { Boss, Hero } from "./class.js";

let chronos = new Boss("Chronos", 1500, 200);
let sauron = new Boss("Sauron", 1200, 200);
let lilith = new Boss("Lilith", 2000, 200);

let aragorn = new Hero();
let gandalf = new Hero();
let legolas = new Hero();

aragorn.type = "Guerrier";
gandalf.type = "Mage";
legolas.type = "Archer";

let randomMana = Math.round(Math.random() * (3 - 1) + 1);

aragorn.rage = 0;

if (randomMana == 1) {
    gandalf.mana = 7;
} else if (randomMana == 2){
    gandalf.mana = 9;
} else {
    gandalf.mana = 11;
}

legolas.fleches = Math.round(Math.random() * ( 11-7 ) + 7 );

export{aragorn,gandalf,legolas,chronos,sauron,lilith}