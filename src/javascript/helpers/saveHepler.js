function saveNewInfo(fightersDetailsMap) {
    let name = document.getElementById('name').innerHTML;
    let health = document.getElementById('health').value;
    let attack = document.getElementById('attack').value;
    let defense = document.getElementById('defense').value;
    
    let id;
    fightersDetailsMap.forEach(fighter => {
        if (name == fighter.name) {
            id = fighter._id;
        }
    });
    
    if((health > 0 && health <= 100) && (attack > 0 && attack <= 10) && (defense > 0 && defense <= 10)) {
        fightersDetailsMap.get(id).health = health;
        fightersDetailsMap.get(id).attack = attack;
        fightersDetailsMap.get(id).defense = defense;
        alert(`The information was successfully updated!`);
    }
    else {
        alert(`The information wasn't updated! Please, enter values in the following ranges:
                Health: 1-100
                Attack: 1-10
                Defense: 1-10
        `);
    }
}

export default saveNewInfo;