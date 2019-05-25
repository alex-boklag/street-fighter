import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';
import fight from './fight';
import saveNewInfo from './helpers/saveHepler';
import chooseFighter from './helpers/chooseHepler';

class FightersView extends View {
  constructor(fighters) {
    super();

    this.handleClick = this.handleFighterClick.bind(this);
    this.createFightersView(fighters);
    this.handleSaveClick();
    this.handleChooseClick();
    this.handleStartClick();
  }

  fightersDetailsMap = new Map();
  fightersForFight = [];

  createFightersView(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element;
    });

    this.element = this.createElement({ tagName: 'div', className: 'fighters' });
    this.element.append(...fighterElements);
  }

  async handleFighterClick(event, fighter) {
    let id = fighter._id;
    let hasFighter = this.fightersDetailsMap.has(`${id}`)

    if (!hasFighter) {
      let fighterDetails = await fighterService.getFighterDetails(fighter._id);
      this.fightersDetailsMap.set(fighter._id, fighterDetails);
    }

    document.getElementById('name').innerHTML = this.fightersDetailsMap.get(id).name;
    document.getElementById('health').value = this.fightersDetailsMap.get(id).health;
    document.getElementById('attack').value = this.fightersDetailsMap.get(id).attack;
    document.getElementById('defense').value = this.fightersDetailsMap.get(id).defense;
  }

  handleSaveClick() {
    document.getElementById('save').addEventListener('click', () => saveNewInfo(this.fightersDetailsMap));
  }

  handleChooseClick() {
    document.getElementById('choose').addEventListener('click', () => {
      if (this.fightersForFight.length < 2) {
        let fighter = chooseFighter(this.fightersDetailsMap);
        this.fightersForFight.push(fighter);
        
        let fighterView = document.getElementById(fighter.name);
        fighterView.style = "box-shadow: 0 0 50px 10px rgba(4, 252, 4, 0.5)";
      } 
      else {
        alert('You have already chosen 2 fighters for the fight. Please, start a game.');
      }
    });
  }

  handleStartClick() {
    document.getElementById('start').addEventListener('click', () => {
      if (this.fightersForFight.length == 2) {
        alert('The fight is starting!');
        setTimeout(() => {
          fight(this.fightersForFight[0], this.fightersForFight[1]);
          this.fightersForFight = [];

          let fightersView = document.querySelectorAll('.fighter');
          fightersView.forEach(fighterView => fighterView.style = "box-shadow: 0");
        }, 2000);
      }
      else {
        alert('Please, enter 2 fighters for the fight.');
      }
    })
  }
}

export default FightersView;