let randomHero = 0;
    
    if (aragorn.etat == "alive" && gandalf.etat == "alive" && legolas.etat == "alive") {
        randomHero = Math.round(Math.random() * (3 - 1) + 1);
    } else if(aragorn.etat == "alive" && gandalf.etat == "alive" && legolas.etat == "dead"){
        randomHero = Math.round(Math.random() * (2 - 1) + 1);
    }  else if(aragorn.etat == "dead" && gandalf.etat == "alive" && legolas.etat == "alive"){
        randomHero = Math.round(Math.random() * (3 - 2) + 2);
    } else if(aragorn.etat == "alive" && gandalf.etat == "dead" && legolas.etat == "alive"){
        randomHero = Math.round(Math.random() * (3 - 1) + 1);
        if (randomHero == 2) {
            randomHero++;
        }
    } else if(aragorn.etat == "alive" && gandalf.etat == "dead" && legolas.etat == "dead"){
        randomHero = 1;
    } else if(aragorn.etat == "dead" && gandalf.etat == "alive" && legolas.etat == "dead"){
        randomHero = 2;
    } else if(aragorn.etat == "dead" && gandalf.etat == "dead" && legolas.etat == "alive"){
        randomHero = 3;
    }

    if (randomHero == 1) {
        aragorn.hp -= boss.pa;
        alert(`${boss.name} attack ${aragorn.name} : -${boss.pa} hp.`);
        if (aragorn.hp <= 0) {
            aragorn.etat = "dead"
            alert(`${aragorn.name} est dead !`);
        }
    } else if (randomHero == 2) {
        gandalf.hp -= boss.pa;
        alert(`${boss.name} attack ${gandalf.name} : -${boss.pa} hp.`);
        if (gandalf.hp <= 0) {
            gandalf.etat = "dead"
            alert(`${gandalf.name} est dead !`);
        }
    } else if(randomHero == 3){
        legolas.hp -= boss.pa;
        alert(`${boss.name} attack ${legolas.name} : -${boss.pa} hp.`);
        if (legolas.hp <= 0) {
            legolas.etat = "dead"
            alert(`${legolas.name} est dead !`);
        }
    }
    checkForLose(boss);