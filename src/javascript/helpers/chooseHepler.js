import Fighter from '../fighter';

function chooseHelper(fightersDetailsMap) {
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
    
    let fighter = new Fighter(name, health, attack, defense);
    return fighter;
}

export default chooseHelper;