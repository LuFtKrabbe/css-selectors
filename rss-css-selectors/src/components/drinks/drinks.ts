import { type DataDrinks } from '../types/drinks-interfaces';

export enum GLASS {
  TUMBLER = 'tumbler',
  COCKTAIL = 'cocktail',
  BALLOON = 'balloon',
}

export enum COLOR {
  BLUE = '#1fbfbf',
  GREEN = '#1fbf5f',
  PURPLE = '#821fbf',
  NONE = '#faebd7',
}

export enum BEVERAGE {
  JUICE = '#c27502',
  WINE = '#aa0000',
  MILK = '#e0deda',
  COLA = '#4d320a',
  NONE = '#ffffff00',
}

export class Drinks implements DataDrinks {
  glass: string;
  color: string;
  beverage: string;

  constructor(glass: GLASS, color: COLOR, beverage: BEVERAGE) {
    this.glass = glass;
    this.color = color;
    this.beverage = beverage;
  }

  private setBeverageColor(): string {
    const transparency = 220; // 0 - 255
    return this.beverage + ('0' + transparency.toString(16)).slice(-2);
  }

  private setGlassColor(transparency: number): string {
    return this.color + ('0' + transparency.toString(16)).slice(-2);
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

      [wallLeft, contain, wallRight].forEach((elem: HTMLElement): void => {
        main.append(elem);
      });
      [main, bottom].forEach((elem: HTMLElement): void => {
        drink.append(elem);
      });

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

      [main, stem, bottom].forEach((elem: HTMLElement): void => {
        drink.append(elem);
      });

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

      [main, stem, bottom].forEach((elem: HTMLElement): void => {
        drink.append(elem);
      });

      contain.style.borderBottomColor = this.setBeverageColor();

      main.style.borderBottomColor = this.setGlassColor(80);
      stem.style.backgroundColor = this.setGlassColor(120);
      bottom.style.backgroundColor = this.setGlassColor(120);
    }

    shelf.append(drink);
  }
}
