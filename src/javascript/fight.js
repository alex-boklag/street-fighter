function fight(fighter1, fighter2) {
    let winner;
    let damage; 

    while(fighter1.health > 0 && fighter2.health > 0) {
        damage = fighter1.getHitPower() - fighter2.getBlockPower();
        if(damage > 0) {
            fighter2.health -= damage;
        }
        if(fighter2.health <= 0) {
            winner = fighter1.name;
            break;
        }

        damage = fighter2.getHitPower() - fighter1.getBlockPower();
        if(damage > 0) {
            fighter1.health -= damage;
        }
        if(fighter1.health <= 0) {
            winner = fighter2.name;
            break;
        }
    }
    alert(`The winner is ${winner}!`);
}

export default fight;