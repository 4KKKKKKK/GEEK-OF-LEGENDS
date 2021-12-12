import {hero1, hero2, hero3, chronos, sauron, lilith} from "./instances.js";

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
let hpTot = 1000;
let paTot = 600;

let debutGame = (boss) => {

    alert(`Salam Hbiba ! Aujourd'hui est un grand jour pour taper ton face contre : ${boss.nom} ! Donne un nom aux 3 perso disponible ! `);

    hero1.nom = prompt(`Le nom du premier héro (Guerrier) :`);
    hero2.nom = prompt(`Le nom du second héro (Mage):`);
    hero3.nom = prompt(`Le nom du troisième héro (Archer):`);
    
    alert(`Niceuuuu ! T'as le droit à ${hpTot} points de vie et ${paTot} points d'action à distribuer à tes 3 héros !`);

// Attribution hp

    do {
        
        if (hpTot > 0) {
            let i = 0
            do {
                let hp1 = prompt(`Combien de hp vas tu donné à ${hero1.nom} ? (${hpTot} hp dispo)`);
                if (hp1 <= hpTot) {
                hero1.hp = hp1;
                hpTot -= hp1;
                i++
                }
            } while (i == 0);
        }

        if (hpTot > 0) {
            let i = 0
            do {
                let hp2 = prompt(`Combien de hp vas tu donné à ${hero2.nom} ? (${hpTot} hp dispo)`);
                if (hp2 <= hpTot) {
                hero2.hp = hp2;
                hpTot -= hp2;
                i++
                }
            } while (i == 0);
        }
        
        if (hpTot > 0) {
            let i = 0
            do {
                let hp3 = prompt(`Combien de hp vas tu donné à ${hero3.nom} ? (${hpTot} hp dispo)`);
                if (hp3 <= hpTot) {
                hero3.hp = hp3;
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
                let pa1 = prompt(`Combien de pa souhaitez vous accorder à ${hero1.nom} ? (${paTot} pa disponibles)`);
                if (pa1 <= paTot) {
                hero1.pa = pa1;
                paTot -= pa1;
                i++
                }
            } while (i == 0);
        }

        if (paTot > 0) {
            let i = 0
            do {
                let pa2 = prompt(`Combien de pa souhaitez vous accorder à ${hero2.nom} ? (${paTot} pa disponibles)`);
                if (pa2 <= paTot) {
                hero2.pa = pa2;
                paTot -= pa2;
                i++
                }
            } while (i == 0);
        }
        
        if (paTot > 0) {
            let i = 0
            do {
                let pa3 = prompt(`Combien de pa souhaitez vous accorder à ${hero3.nom} ? (${paTot} pa disponibles)`);
                if (pa3 <= paTot) {
                hero3.pa = pa3;
                paTot -= pa3;
                i++
                }
            } while (i == 0);
        }
        
    } while (paTot > 0);

    let firstType = "";
    do {
        firstType = prompt(`Quel type de joueur vas tu choisir pour : ${hero1.nom} ? (Attack/Défense) :`).toLowerCase().trim();
        switch (firstType) {
            case "attaque":
                hero1.attaque();
                break;
            case "defense":
                hero1.defense();
                break;
        }

    } while (firstType != "attaque" && firstType != "defense" && firstType != "normale" );

    let secondType = "";
    do {
        secondType = prompt(`Quel type de joueur vas tu choisir pour : ${hero2.nom} ? (Attack/Défense) :`).toLowerCase().trim();
        switch (secondType) {
            case "attaque":
                hero2.attaque();
                break;
            case "defense":
                hero2.defense();
                break;
        }

    } while (secondType != "attaque" && secondType != "defense" && secondType != "normale" );

    let thirdType = "";
    do {
        thirdType = prompt(`Quel type de joueur vas tu choisir pour : ${hero3.nom} ? (Attack/Défense) :`).toLowerCase().trim();
        switch (thirdType) {
            case "attaque":
                hero3.attaque();
                break;
            case "defense":
                hero3.defense();
                break;
        }

    } while (thirdType != "attaque" && thirdType != "defense" && thirdType != "normale" );
    alert(`${hero1.nom} : ${hero1.hp}hp et ${hero1.pa}pa`);
    alert(`${hero2.nom} : ${hero2.hp}hp et ${hero2.pa}pa`);
    alert(`${hero3.nom} : ${hero3.hp}hp et ${hero3.pa}pa`);

    console.log(hero1,hero2,hero3);
    console.log(boss);
}

let attGuerrier = (boss) => {
    let newpa = hero1.pa * 1.25;
    if (hero1.etat == "vivant") {
        if (hero1.rage < 4) {
            hero1.rage = hero1.rage + 1;
            boss.hp -= hero1.pa;
            alert(`${hero1.nom} attaque ${boss.nom} : -${hero1.pa} hp.`);
        } else {
            hero1.rage = 0
            boss.hp -= newpa;
            alert(`${hero1.nom} est enragé, il attaque ${boss.nom} : -${newpa} hp.`);
        }
    }
}

let attMage = (boss) => {
    if (hero2.etat == "vivant") {
        if (hero2.mana > 1) {
            boss.hp -= hero2.pa;
            hero2.mana -= 2;
            alert(`${hero2.nom} attaque ${boss.nom} : -${hero2.pa} hp.`)
        } else {
            hero2.mana = 7;
            alert(`${hero2.nom} prend son temps pour récupérer du mana : pas d'attaque.`);
        }
    }
}

let attArcher = (boss) => {
    if (hero2.etat == "vivant") {
        if (hero3.fleches > 1) {
            hero3.fleches -= 2;
            hero3.fleches += 1;
            boss.hp -= hero3.pa;
            alert(`${hero3.nom} attaque ${boss.nom} : -${hero3.pa} hp.`)
        } else {
            hero3.fleches += 6;
            alert(`${hero3.nom} attend de recevoir de nouvelles flèches : pas d'attaque.`);
        }
    }
}

let checkForLose = (boss) => {
    if (hero1.etat == "dead" && hero2.etat == "dead" && hero3.etat == "dead") {
        alert(`Vous avez perdu ... ${boss.nom} était trop fort pour vous.`);
        return true;
    }
}



let attBoss = (boss, champions) => {
    
    let randomHero = Math.round(Math.random() * ((champions.length-1) - 1) + 1);

        champions[randomHero].hp -= boss.pa;
        alert(`${boss.nom} attaque ${champions[randomHero].nom} : -${boss.pa} hp.`);
        if (champions[randomHero] <= 0) {
            champions[randomHero] = "dead"
            champions.forEach(element => {
                if (element.nom.includes(champions[randomHero].nom)) {
                    champions.splice(element);
                }
            });
            alert(`${champions[randomHero]} est dead !`);
        }
}



let combat = (boss) => {
    let hpBoss = boss.hp;
    let champions = [hero1,hero2,hero3];
    champions.forEach(element => {
        if (element.posture == "defense") {
            champions.push(element);
        }    
    });
    do {
        attGuerrier(boss);
        attMage(boss);
        attArcher(boss);
        attBoss(boss,champions);
    } while (boss.hp > hpBoss / 5 && !checkForLose(boss));
    console.log(boss,hero1,hero2,hero3);
}

export{debutGame,randomBoss,combat};