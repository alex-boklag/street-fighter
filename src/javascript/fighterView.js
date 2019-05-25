import View from './view';

class FighterView extends View {
  constructor(fighter, handleClick) {
    super();

    this.createFighterView(fighter, handleClick);
  }

  createFighterView(fighter, handleClick) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);
    const attributes = { "id": name, "data-toggle": "modal", "data-target": "#modalWindow" };

    this.element = this.createElement({ tagName: 'div', className: 'fighter', attributes });
    this.element.append(imageElement, nameElement);
    this.element.addEventListener('click', event => handleClick(event, fighter), false);
  }

  createName(name) {
    const nameElement = this.createElement({ tagName: 'span', className: 'name' });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source) {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes
    });

    return imgElement;
  }
}

export default FighterView;