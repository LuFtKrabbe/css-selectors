import { type DataDrinks } from '../types/drinks-interfaces';

export enum GLASS {
  TUMBLER = 'tumbler',
  COCKTAIL = 'cocktail',
  BALLOON = 'balloon',
}

export enum COLOR {
  BLUE = 'blue',
  GREEN = 'green',
  PURPLE = 'purple',
  NONE = 'none',
}

export enum BEVERAGE {
  JUICE = 'juice',
  WINE = 'wine',
  MILK = 'milk',
  COLA = 'cola',
  NONE = 'none',
}

export class Drinks implements DataDrinks {
  glass: string;
  color: string;
  beverage: string;
  colorsGlasses = {
    blue: '#c27502',
    green: '#1fbf5f',
    purple: '#821fbf',
    none: '#faebd799',
  };

  colorsBevereges = {
    juice: '#c27502',
    wine: '#1fbf5f',
    milk: '#821fbf',
    cola: '#4d320a',
    none: '#faebd700',
  };

  constructor(glass: GLASS, color: COLOR, beverage: BEVERAGE) {
    this.glass = glass;
    this.color = color;
    this.beverage = beverage;
  }

  private setBeverageColor(): string {
    const transparency = 220; // 0 - 255
    if (this.beverage === 'juice' || this.beverage === 'wine' || this.beverage === 'milk' || this.beverage === 'cola') {
      return this.colorsBevereges[this.beverage] + ('0' + transparency.toString(16)).slice(-2);
    }
    return this.colorsBevereges.none;
  }

  private setGlassColor(transparency: number): string {
    if (this.color === 'blue' || this.color === 'green' || this.color === 'purple') {
      return this.colorsGlasses[this.color] + ('0' + transparency.toString(16)).slice(-2);
    }
    return this.colorsGlasses.none;
  }

  createCode(number: number): void {
    const codeBlockLines = document.querySelector('.code-block-lines') as HTMLElement;
    const glassCode = document.createElement('div') as HTMLElement;
    const beverageCode = document.createElement('div') as HTMLElement;

    glassCode.addEventListener('mouseover', this.showGlass);
    glassCode.addEventListener('mouseout', this.leaveGlass);
    beverageCode.addEventListener('mouseover', this.showBeverage);
    beverageCode.addEventListener('mouseout', this.leaveBeverage);

    beverageCode.classList.add('beverage-block-code');
    beverageCode.setAttribute('beverage-code-number', `${number}`);
    glassCode.classList.add('glass-block-code');
    glassCode.setAttribute('glass-code-number', `${number}`);

    let openedTag = `<${this.glass}`;
    if (this.color === 'blue' || this.color === 'green' || this.color === 'purple') {
      openedTag += ` id=${this.color}`;
    }
    openedTag += '>';

    if (this.beverage === 'juice' || this.beverage === 'wine' || this.beverage === 'milk' || this.beverage === 'cola') {
      beverageCode.innerText = `<${this.beverage}`;
    }
    if (this.beverage === 'juice' || this.beverage === 'wine' || this.beverage === 'milk' || this.beverage === 'cola') {
      beverageCode.innerText += ` class=half>`;
    }
    const closedTag = `</${this.glass}>`;

    glassCode.append(openedTag, beverageCode, closedTag);

    codeBlockLines.append(glassCode);
  }

  showGlass(event: Event): void {
    const element = event.target as HTMLElement;
    const glassNumber = element.getAttribute('glass-code-number');
    if (element.matches('.glass-block-code') && glassNumber !== null) {
      const glass = document.querySelector(`[glass-drink-number='${glassNumber}']`) as HTMLElement;
      glass.setAttribute('focus', 'true');

      const helper = document.createElement('div');
      if (element.textContent !== null) {
        const text = element.textContent.slice(0, element.textContent.indexOf('>') + 1);
        helper.innerText = text;
      }
      helper.classList.add('helper');
      glass.append(helper);
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
    if (element.matches('.beverage-block-code') && beverageNumber !== null) {
      const glass = document.querySelector(`[glass-drink-number='${beverageNumber}']`) as HTMLElement;
      const beverage = document.querySelector(`[beverage-drink-number='${beverageNumber}']`) as HTMLElement;
      beverage.setAttribute('focus', 'true');

      const helper = document.createElement('div');

      if (element.textContent !== null) {
        const text = element.textContent.slice(0, element.textContent.indexOf('>') + 1);
        helper.innerText = text;
      }
      helper.classList.add('helper');
      helper.setAttribute('focus', 'true');
      glass.setAttribute('move', 'false');
      glass.append(helper);
    }
  }

  leaveBeverage(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-code-number');
    if (element.matches('.beverage-block-code') && beverageNumber !== null) {
      const beverage = document.querySelector(`[beverage-drink-number='${beverageNumber}']`) as HTMLElement;
      const glass = document.querySelector(`[glass-drink-number='${beverageNumber}']`) as HTMLElement;
      beverage.setAttribute('focus', 'false');

      const helper = document.querySelector('.helper') as HTMLElement;
      helper.remove();
      glass.setAttribute('move', 'true');
    }
  }

  showCode(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-drink-number');
    let glassNumber: string | null = '';
    if (this instanceof HTMLElement) {
      glassNumber = this.getAttribute('glass-drink-number');
    }
    if (element.matches(`[contain='true']`) && beverageNumber !== null) {
      const codeBeverage = document.querySelector(`[beverage-code-number='${beverageNumber}']`) as HTMLElement;
      codeBeverage.setAttribute('focus', 'true');
      const helper = document.createElement('div');
      helper.classList.add('helper-vis');
      helper.setAttribute('focus', 'true');

      if (codeBeverage.textContent !== null) {
        const text = codeBeverage.textContent.slice(0, codeBeverage.textContent.indexOf('>') + 1);
        helper.innerText = text;
      }

      if (this instanceof HTMLElement) {
        this.append(helper);
      }
    } else if (glassNumber !== null) {
      const codeGlass = document.querySelector(`[glass-code-number='${glassNumber}']`) as HTMLElement;
      codeGlass.setAttribute('focus', 'true');

      const helper = document.createElement('div');
      helper.classList.add('helper-vis');
      helper.setAttribute('focus', 'true');

      if (codeGlass.textContent !== null) {
        const text = codeGlass.textContent.slice(0, codeGlass.textContent.indexOf('>') + 1);
        helper.innerText = text;
      }

      if (this instanceof HTMLElement) {
        this.append(helper);
      }
    }
  }

  leaveCode(event: Event): void {
    const element = event.target as HTMLElement;
    const beverageNumber = element.getAttribute('beverage-drink-number');
    let glassNumber: string | null = '';
    if (this instanceof HTMLElement) {
      glassNumber = this.getAttribute('glass-drink-number');
    }
    if (element.matches(`[contain='true']`) && beverageNumber !== null) {
      const codeBeverage = document.querySelector(`[beverage-code-number='${beverageNumber}']`) as HTMLElement;
      codeBeverage.setAttribute('focus', 'false');
      const helper = document.querySelector('.helper-vis') as HTMLElement;
      helper.remove();
    } else if (glassNumber !== null) {
      const codeGlass = document.querySelector(`[glass-code-number='${glassNumber}']`) as HTMLElement;
      codeGlass.setAttribute('focus', 'false');

      const helper = document.querySelector('.helper-vis') as HTMLElement;
      helper.remove();
    }
  }

  createDrink(fullness: number, number: number, answer: string): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const drink = document.createElement('div') as HTMLElement;
    const main = document.createElement('div') as HTMLElement;
    const stem = document.createElement('div') as HTMLElement;
    const bottom = document.createElement('div') as HTMLElement;
    const contain = document.createElement('div') as HTMLElement;
    const wallLeft = document.createElement('div') as HTMLElement;
    const wallRight = document.createElement('div') as HTMLElement;

    contain.setAttribute('contain', 'true');
    contain.setAttribute('beverage-drink-number', `${number}`);
    drink.setAttribute('glass-drink-number', `${number}`);
    drink.setAttribute('answer', `${answer}`);
    drink.addEventListener('mouseover', this.showCode);
    drink.addEventListener('mouseout', this.leaveCode);

    if (this.glass === 'tumbler') {
      drink.classList.add('tumbler-drink');
      main.classList.add('tumbler-main');
      bottom.classList.add('tumbler-bottom');
      wallLeft.classList.add('tumbler-wall-left');
      contain.classList.add('tumbler-contain');
      wallRight.classList.add('tumbler-wall-right');

      main.append(wallLeft, contain, wallRight);
      drink.append(main, bottom);

      contain.style.height = `${fullness - 15}%`;
      contain.style.backgroundColor = this.setBeverageColor();
      main.style.backgroundColor = this.setGlassColor(80);
      wallLeft.style.backgroundColor = this.setGlassColor(80);
      wallRight.style.backgroundColor = this.setGlassColor(80);
      bottom.style.backgroundColor = this.setGlassColor(160);
    }

    if (this.glass === 'cocktail') {
      drink.classList.add('cocktail-drink');
      contain.classList.add('cocktail-contain');
      main.classList.add('cocktail-main');
      stem.classList.add('cocktail-stem');
      bottom.classList.add('cocktail-bottom');

      main.append(contain);
      drink.append(main, stem, bottom);

      contain.style.borderTopColor = this.setBeverageColor();
      main.style.borderTopColor = this.setGlassColor(80);
      stem.style.backgroundColor = this.setGlassColor(120);
      bottom.style.backgroundColor = this.setGlassColor(120);
    }

    if (this.glass === 'balloon') {
      drink.classList.add('balloon-drink');
      contain.classList.add('balloon-contain');
      main.classList.add('balloon-main');
      stem.classList.add('balloon-stem');
      bottom.classList.add('balloon-bottom');

      main.append(contain);
      drink.append(main, stem, bottom);

      contain.style.borderBottomColor = this.setBeverageColor();
      main.style.borderBottomColor = this.setGlassColor(80);
      stem.style.backgroundColor = this.setGlassColor(120);
      bottom.style.backgroundColor = this.setGlassColor(120);
    }
    if (this.beverage === 'none') {
      contain.remove();
    }

    drink.setAttribute('move', 'true');
    shelf.append(drink);
  }
}
