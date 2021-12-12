let randomHero = 0;
    
    if (hero1.etat == "alive" && hero2.etat == "alive" && hero3.etat == "alive") {
        randomHero = Math.round(Math.random() * (3 - 1) + 1);
    } else if(hero1.etat == "alive" && hero2.etat == "alive" && hero3.etat == "dead"){
        randomHero = Math.round(Math.random() * (2 - 1) + 1);
    }  else if(hero1.etat == "dead" && hero2.etat == "alive" && hero3.etat == "alive"){
        randomHero = Math.round(Math.random() * (3 - 2) + 2);
    } else if(hero1.etat == "alive" && hero2.etat == "dead" && hero3.etat == "alive"){
        randomHero = Math.round(Math.random() * (3 - 1) + 1);
        if (randomHero == 2) {
            randomHero++;
        }
    } else if(hero1.etat == "alive" && hero2.etat == "dead" && hero3.etat == "dead"){
        randomHero = 1;
    } else if(hero1.etat == "dead" && hero2.etat == "alive" && hero3.etat == "dead"){
        randomHero = 2;
    } else if(hero1.etat == "dead" && hero2.etat == "dead" && hero3.etat == "alive"){
        randomHero = 3;
    }

    if (randomHero == 1) {
        hero1.hp -= boss.pa;
        alert(`${boss.name} attack ${hero1.name} : -${boss.pa} hp.`);
        if (hero1.hp <= 0) {
            hero1.etat = "dead"
            alert(`${hero1.name} est dead !`);
        }
    } else if (randomHero == 2) {
        hero2.hp -= boss.pa;
        alert(`${boss.name} attack ${hero2.name} : -${boss.pa} hp.`);
        if (hero2.hp <= 0) {
            hero2.etat = "dead"
            alert(`${hero2.name} est dead !`);
        }
    } else if(randomHero == 3){
        hero3.hp -= boss.pa;
        alert(`${boss.name} attack ${hero3.name} : -${boss.pa} hp.`);
        if (hero3.hp <= 0) {
            hero3.etat = "dead"
            alert(`${hero3.name} est dead !`);
        }
    }
    checkForLose(boss);