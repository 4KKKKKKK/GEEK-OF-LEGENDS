import {aragorn, gandalf, legolas, chronos, sauron, lilith} from "./instances.js";

let randomBoss = () => {
    let randomNumber = Math.round(Math.random() * (3 - 1) + 1);
    if (randomNumber == 1) {
        return sauron;
    } else if (randomNumber == 2) {
        return chronos;
    } else {
        return lilith;
    }
}
let hpTot = 1200;
let paTot = 600;

let startGame = (boss) => {

    alert(`Salam Hbiba ! Aujourd'hui est un grand jour pour taper ton face contre : ${boss.name} ! Donne un blaze aux 3 perso disponible ! `);

    aragorn.name = prompt(`Le nom du premier héro (Guerrier) : \n (Aragorn)`);
    gandalf.name = prompt(`Le nom du second héro (Mage): \n (Gandalf)`);
    legolas.name = prompt(`Le nom du troisième héro (Archer): \n (Legolas)`);
    
    alert(`Niceuuuu ! T'as le droit à ${hpTot} points de vie et ${paTot} points d'action à départager à tes 3 héros !`);

// Attribution hp

    do {
        
        if (hpTot > 0) {
            let i = 0
            do {
                let hp1 = prompt(`Combien d'hp vas tu donné à ${aragorn.name} ? (${hpTot} hp dispo)`);
                if (hp1 <= hpTot) {
                aragorn.hp = hp1;
                hpTot -= hp1;
                i++
                }
            } while (i == 0);
        }

        if (hpTot > 0) {
            let i = 0
            do {
                let hp2 = prompt(`Combien d'hp vas tu donné à ${gandalf.name} ? (${hpTot} hp dispo)`);
                if (hp2 <= hpTot) {
                gandalf.hp = hp2;
                hpTot -= hp2;
                i++
                }
            } while (i == 0);
        }
        
        if (hpTot > 0) {
            let i = 0
            do {
                let hp3 = prompt(`Combien d'hp vas tu donné à ${legolas.name} ? (${hpTot} hp dispo)`);
                if (hp3 <= hpTot) {
                legolas.hp = hp3;
                hpTot -= hp3;
                i++
                }
            } while (i == 0);
        }
        
    } while (hpTot > 0);
    

// Attribution pa

    do {
        
        if (paTot > 0) {
            let i = 0
            do {
                let pa1 = prompt(`Combien de PA (point d'action) veux tu donnés à : ${aragorn.name} ? (${paTot} pa disponibles)`);
                if (pa1 <= paTot) {
                aragorn.pa = pa1;
                paTot -= pa1;
                i++
                }
            } while (i == 0);
        }

        if (paTot > 0) {
            let i = 0
            do {
                let pa2 = prompt(`Combien de PA (point d'action) veux tu donnés à : ${gandalf.name} ? (${paTot} pa disponibles)`);
                if (pa2 <= paTot) {
                gandalf.pa = pa2;
                paTot -= pa2;
                i++
                }
            } while (i == 0);
        }
        
        if (paTot > 0) {
            let i = 0
            do {
                let pa3 = prompt(`Combien de PA (point d'action) veux tu donnés à : ${legolas.name} ? (${paTot} pa disponibles)`);
                if (pa3 <= paTot) {
                legolas.pa = pa3;
                paTot -= pa3;
                i++
                }
            } while (i == 0);
        }
        
    } while (paTot > 0);

    let firstType = "";
    do {
        firstType = prompt(`Quel type de joueur vas tu choisir pour : ${aragorn.name} ? (Attack/Défense) :`).toLowerCase().trim();
        switch (firstType) {
            case "attack":
                aragorn.attack();
                break;
            case "defense":
                aragorn.defense();
                break;
        }

    } while (firstType != "attack" && firstType != "defense" && firstType != "normale" );

    let secondType = "";
    do {
        secondType = prompt(`Quel type de joueur vas tu choisir pour : ${gandalf.name} ? (Attack/Défense) :`).toLowerCase().trim();
        switch (secondType) {
            case "attack":
                gandalf.attack();
                break;
            case "defense":
                gandalf.defense();
                break;
        }

    } while (secondType != "attack" && secondType != "defense" && secondType != "normale" );

    let thirdType = "";
    do {
        thirdType = prompt(`Quel type de joueur vas tu choisir pour : ${legolas.name} ? (Attack/Défense) :`).toLowerCase().trim();
        switch (thirdType) {
            case "attack":
                legolas.attack();
                break;
            case "defense":
                legolas.defense();
                break;
        }

    } while (thirdType != "attack" && thirdType != "defense" && thirdType != "normale" );
    alert(`${aragorn.name} : ${aragorn.hp}hp et ${aragorn.pa}pa`);
    alert(`${gandalf.name} : ${gandalf.hp}hp et ${gandalf.pa}pa`);
    alert(`${legolas.name} : ${legolas.hp}hp et ${legolas.pa}pa`);

    alert(aragorn,gandalf,legolas);
    alert(boss.name);
}

let attGuerrier = (boss) => {
    let newpa = aragorn.pa * 1.25;
    if (aragorn.etat == "alive") {
        if (aragorn.rage < 4) {
            aragorn.rage = aragorn.rage + 1;
            boss.hp -= aragorn.pa;
            alert(`${aragorn.name} attack ${boss.name} : -${aragorn.pa} hp.`);
        } else {
            aragorn.rage = 0
            boss.hp -= newpa;
            alert(`${aragorn.name} fou de rage, il tartaq ${boss.name} : -${newpa} hp.`);
        }
    }
}

let attMage = (boss) => {
    if (gandalf.etat == "alive") {
        if (gandalf.mana > 1) {
            boss.hp -= gandalf.pa;
            gandalf.mana -= 2;
            alert(`${gandalf.name} attack ${boss.name} : -${gandalf.pa} hp.`)
        } else {
            gandalf.mana = 7;
            alert(`${gandalf.name} récupère du mana, il n'attaquera pas ce tour ci !`);
        }
    }
}

let attArcher = (boss) => {
    if (gandalf.etat == "alive") {
        if (legolas.fleches > 1) {
            legolas.fleches -= 2;
            legolas.fleches += 1;
            boss.hp -= legolas.pa;
            alert(`${legolas.name} attack ${boss.name} : -${legolas.pa} hp.`)
        } else {
            legolas.fleches += 6;
            alert(`${legolas.name} attend de recevoir de nouvelles flèches : mtala3 dem.`);
        }
    }
}

let checkForLose = (boss) => {
    if (aragorn.etat == "dead" && gandalf.etat == "dead" && legolas.etat == "dead") {
        alert(`Unlucky... ${boss.name} était trop hamé.`);
        return true;
    }
}



let attBoss = (boss, champions) => {
    
    let randomHero = Math.round(Math.random() * ((champions.length-1) - 1) + 1);

        champions[randomHero].hp -= boss.pa;
        alert(`${boss.name} attack ${champions[randomHero].name} : -${boss.pa} hp.`);
        if (champions[randomHero] <= 0) {
            champions[randomHero] = "dead"
            champions.forEach(e => {
                if (e.name.includes(champions[randomHero].name)) {
                    champions.splice(e);
                }
            });
            alert(`${champions[randomHero]} est dead !`);
        }
}



let fight = (boss) => {
    let hpBoss = boss.hp;
    let champions = [aragorn,gandalf,legolas];
    champions.forEach(e => {
        if (e.posture == "defense") {
            champions.push(e);
        }    
    });
    do {
        attGuerrier(boss);
        attMage(boss);
        attArcher(boss);
        attBoss(boss,champions);
    } while (boss.hp > hpBoss / 5 && !checkForLose(boss));
    alert(boss,aragorn,gandalf,legolas);
}

export{startGame,randomBoss,fight};