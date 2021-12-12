let chronos = new Boss("Chronos", 25000, 120);
let sauron = new Boss("Sauron", 25000, 120);
let lilith = new Boss("Lilith", 30000, 120);

let hero1 = new Hero();
let hero2 = new Hero();
let hero3 = new Hero();

hero1.type = "Guerrier";
hero2.type = "Mage";
hero3.type = "Archer";

let randomMana = Math.round(Math.random() * (3 - 1) + 1);

hero1.rage = 0;

if (randomMana == 1) {
    hero2.mana = 7;
} else if (randomMana == 2){
    hero2.mana = 9;
} else {
    hero2.mana = 11;
}

hero3.fleches = Math.round(Math.random() * ( 11-7 ) + 7 );