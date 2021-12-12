class Boss {
    constructor(name, hp, pa) {
        this.name = name;
        this.hp = hp;
        this.pa = pa;
    }
}

class Hero{
    constructor(name, hp, pa){
        this.name = name;
        this.hp = hp;
        this.pa = pa;
        this.etat = "alive";
        this.defense = () => {
            this.hp = this.hp * 2.5;
            this.pa = this.pa * 0.5;
            this.posture = "defense";
        }
        this.attack = () =>{
            this.hp = this.hp * 0.75;
            this.pa = this.pa*1.4;
            this.posture = "attack";
        }
    }
}

export{Boss, Hero}