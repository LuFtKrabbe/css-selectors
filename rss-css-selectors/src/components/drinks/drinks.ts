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

  createCode(): void {
    const codeBlock = document.querySelector('.code-block-container') as HTMLElement;
    const glassCode = document.createElement('div') as HTMLElement;
    const beverageCode = document.createElement('div') as HTMLElement;

    beverageCode.classList.add('beverage-block-code');
    glassCode.classList.add('glass-block-code');

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

    codeBlock.append(glassCode);
  }

  createDrink(fullness: number): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const drink = document.createElement('div') as HTMLElement;
    const main = document.createElement('div') as HTMLElement;
    const stem = document.createElement('div') as HTMLElement;
    const bottom = document.createElement('div') as HTMLElement;
    const contain = document.createElement('div') as HTMLElement;
    const wallLeft = document.createElement('div') as HTMLElement;
    const wallRight = document.createElement('div') as HTMLElement;

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

    drink.setAttribute('shine', 'true');

    shelf.append(drink);
  }
}
