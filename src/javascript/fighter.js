import randomInteger from './helpers/randomHepler';

class Fighter {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.criticalHitChance;
        this.dodgeChance;
    }

    getHitPower() {
        this.criticalHitChance = randomInteger(1,2);
        return this.attack * this.criticalHitChance;
    }

    getBlockPower() {
        this.dodgeChance = randomInteger(1,2);
        return this.defense * this.dodgeChance;
    }
}

export default Fighter;