import { type DataDrinks } from '../types/interfaces';
import { type GLASS, type COLOR, type BEVERAGE, type FULLNESS } from '../types/enums';
import { elemHTMLClassAttr } from '../utilities/functions';

export class Drinks implements DataDrinks {
  glass: GLASS;
  color: COLOR;
  beverage: BEVERAGE;
  fullness: FULLNESS;

  colorsGlasses = { blue: '#47b3ff', green: '#1fbf5f', purple: '#821fbf', none: '#faebd7' };
  colorsBevereges = { juice: '#c27502', wine: '#8c0000', milk: '#ededdd', cola: '#4d320a', none: '#faebd700' };

  constructor(glass: GLASS, color: COLOR, beverage: BEVERAGE, fullness: FULLNESS) {
    this.glass = glass;
    this.color = color;
    this.beverage = beverage;
    this.fullness = fullness;
  }

  setBeverageColor(): string {
    return this.colorsBevereges[this.beverage];
  }

  setGlassColor(transparency: number): string {
    return this.colorsGlasses[this.color] + ('0' + transparency.toString(16)).slice(-2); // transparency in range 0 to 255
  }

  createCode(number: number): void {
    const codeBlockLines = document.querySelector('.code-block-lines') as HTMLElement;

    const glassCode = elemHTMLClassAttr('glass-block-code')('glass-code-number', `${number}`);
    const beverageCode = elemHTMLClassAttr('beverage-block-code')('beverage-code-number', `${number}`);

    const openedTag = this.color !== 'none' ? `<${this.glass}>` : `<${this.glass} id="${this.color}">`;
    if (this.beverage !== 'none' && this.fullness !== 'half') {
      beverageCode.innerText = `<${this.beverage}>`;
    } else if (this.fullness === 'half') {
      beverageCode.innerText = `<${this.beverage} class="${this.fullness}">`;
    }
    const closedTag = `</${this.glass}>`;

    glassCode.append(openedTag, beverageCode, closedTag);
    codeBlockLines.append(glassCode);

    glassCode.addEventListener('mouseover', this.showGlass);
    glassCode.addEventListener('mouseout', this.leaveGlass);
    beverageCode.addEventListener('mouseover', this.showBeverage);
    beverageCode.addEventListener('mouseout', this.leaveBeverage);
  }

  showGlass(event: Event): void {
    const element = event.target as HTMLElement;
    const glassNumber = element.getAttribute('glass-code-number');
    if (element.matches('.glass-block-code') && element.textContent !== null && glassNumber !== null) {
      const glass = document.querySelector(`[glass-drink-number='${glassNumber}']`) as HTMLElement;
      glass.setAttribute('focus', 'true');

      const helper = elemHTMLClassAttr('helper')();
      helper.innerText = element.textContent.slice(0, element.textContent.indexOf('>') + 1);

      glass.prepend(helper);
    }
  }

  leaveGlass(event: Event): void {
    const element = event.target as HTMLElement;
    const glassNumber = element.getAttribute('glass-code-number');
    if (element.matches('.glass-block-code') && glassNumber !== null) {
      const glass = document.querySelector(`[glass-drink-number='${glassNumber}']`) as HTMLElement;
      glass.setAttribute('focus', 'false');

      const helper = document.querySelector('.helper') as HTMLElement;
      helper.remove();
    }
  }

  showBeverage(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-code-number');
    if (element.matches('.beverage-block-code') && element.textContent !== null && beverageNumber !== null) {
      const glass = document.querySelector(`[glass-drink-number='${beverageNumber}']`) as HTMLElement;
      const beverage = document.querySelector(`[beverage-drink-number='${beverageNumber}']`) as HTMLElement;
      beverage.setAttribute('focus', 'true');

      const helper = elemHTMLClassAttr('helper')('focus', 'true');
      helper.innerText = element.textContent.slice(0, element.textContent.indexOf('>') + 1);

      glass.prepend(helper);
    }
  }

  leaveBeverage(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-code-number');
    if (element.matches('.beverage-block-code') && beverageNumber !== null) {
      const glass = document.querySelector(`[glass-drink-number='${beverageNumber}']`) as HTMLElement;
      glass.setAttribute('move', 'true');

      const beverage = document.querySelector(`[beverage-drink-number='${beverageNumber}']`) as HTMLElement;
      beverage.setAttribute('focus', 'false');

      const helper = document.querySelector('.helper') as HTMLElement;
      helper.remove();
    }
  }

  showCode(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-drink-number');
    const helperVis = elemHTMLClassAttr('helper-vis')('focus', 'true');

    let glassNumber: string | null = '';
    if (this instanceof HTMLElement) {
      glassNumber = this.getAttribute('glass-drink-number');
    }

    if (element.matches(`[contain='true']`) && beverageNumber !== null) {
      const codeBeverage = document.querySelector(`[beverage-code-number='${beverageNumber}']`) as HTMLElement;
      codeBeverage.setAttribute('focus', 'true');
      if (codeBeverage.textContent !== null) {
        helperVis.innerText = codeBeverage.textContent.slice(0, codeBeverage.textContent.indexOf('>') + 1);
      }
    } else if (glassNumber !== null) {
      const codeGlass = document.querySelector(`[glass-code-number='${glassNumber}']`) as HTMLElement;
      codeGlass.setAttribute('focus', 'true');
      if (codeGlass.textContent !== null) {
        helperVis.innerText = codeGlass.textContent.slice(0, codeGlass.textContent.indexOf('>') + 1);
      }
    }

    if (this instanceof HTMLElement) {
      this.append(helperVis);
    }
  }

  leaveCode(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-drink-number');
    const helperVis = document.querySelector('.helper-vis') as HTMLElement;

    let glassNumber: string | null = '';
    if (this instanceof HTMLElement) {
      glassNumber = this.getAttribute('glass-drink-number');
    }
    if (element.matches(`[contain='true']`) && beverageNumber !== null) {
      const codeBeverage = document.querySelector(`[beverage-code-number='${beverageNumber}']`) as HTMLElement;
      codeBeverage.setAttribute('focus', 'false');
    } else if (glassNumber !== null) {
      const codeGlass = document.querySelector(`[glass-code-number='${glassNumber}']`) as HTMLElement;
      codeGlass.setAttribute('focus', 'false');
    }

    helperVis.remove();
  }

  createDrink(number: number, answer: boolean): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;

    const drink = elemHTMLClassAttr(`${this.glass}-drink`)('glass-drink-number', `${number}`);
    const contain = elemHTMLClassAttr(`${this.glass}-contain`)('beverage-drink-number', `${number}`);
    const main = elemHTMLClassAttr(`${this.glass}-main`)();
    const stem = elemHTMLClassAttr(`${this.glass}-stem`)();
    const bottom = elemHTMLClassAttr(`${this.glass}-bottom`)();
    const wallLeft = elemHTMLClassAttr(`tumbler-wall-left`)();
    const wallRight = elemHTMLClassAttr(`tumbler-wall-right`)();

    if (this.glass === 'tumbler') {
      main.append(wallLeft, contain, wallRight);
      drink.append(main, bottom);

      contain.style.backgroundColor = this.setBeverageColor();
      main.style.backgroundColor = this.setGlassColor(80);
      wallLeft.style.backgroundColor = this.setGlassColor(80);
      wallRight.style.backgroundColor = this.setGlassColor(80);
      bottom.style.backgroundColor = this.setGlassColor(160);
    }

    if (this.glass === 'cocktail') {
      main.append(contain);
      drink.append(main, stem, bottom);

      contain.style.borderTopColor = this.setBeverageColor();
      main.style.borderTopColor = this.setGlassColor(80);
      stem.style.backgroundColor = this.setGlassColor(120);
      bottom.style.backgroundColor = this.setGlassColor(120);
    }

    if (this.glass === 'balloon') {
      main.append(contain);
      drink.append(main, stem, bottom);

      contain.style.borderBottomColor = this.setBeverageColor();
      main.style.borderBottomColor = this.setGlassColor(80);
      stem.style.backgroundColor = this.setGlassColor(120);
      bottom.style.backgroundColor = this.setGlassColor(120);
    }

    if (this.fullness === 'half') {
      contain.setAttribute('fullness', 'half');
    }

    if (this.beverage === 'none' || this.fullness === 'none') {
      contain.remove();
    } else {
      contain.setAttribute('contain', 'true');
    }

    drink.addEventListener('mouseover', this.showCode);
    drink.addEventListener('mouseout', this.leaveCode);
    drink.setAttribute('answer', `${answer.toString()}`);
    if (answer) {
      drink.style.animation = 'moving 1800ms infinite';
    }

    drink.setAttribute('move', 'true');

    shelf.append(drink);
  }
}
