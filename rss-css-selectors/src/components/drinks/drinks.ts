import { type DataDrinks } from '../types/drinks-interfaces';

export class Drinks implements DataDrinks {
  glass: string;
  beverage: string | undefined;
  ice: boolean | undefined;

  constructor(glass: string, beverage?: string, ice?: boolean) {
    this.glass = glass;
    this.beverage = beverage;
    this.ice = ice;
  }

  createDrink(fullness: number): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const drink = document.createElement('div') as HTMLElement;

    if (this.glass === 'tumbler') {
      const main = document.createElement('div') as HTMLElement;
      const bottom = document.createElement('div') as HTMLElement;

      main.classList.add('tumbler-main');
      bottom.classList.add('tumbler-bottom');

      const wallLeft = document.createElement('div') as HTMLElement;
      const beverage = document.createElement('div') as HTMLElement;
      const wallRight = document.createElement('div') as HTMLElement;

      main.append(wallLeft);
      main.append(beverage);
      main.append(wallRight);

      wallLeft.classList.add('tumbler-wall-left');
      beverage.classList.add('tumbler-beverage');
      wallRight.classList.add('tumbler-wall-right');

      drink.append(main);
      drink.append(bottom);

      drink.classList.add('drink-tumbler');

      beverage.style.height = `${fullness}%`;
      beverage.style.backgroundColor = `#AA0000`;
    }

    if (this.glass === 'cocktail') {
      const main = document.createElement('div') as HTMLElement;
      const stem = document.createElement('div') as HTMLElement;
      const bottom = document.createElement('div') as HTMLElement;
      const beverage = document.createElement('div') as HTMLElement;
      beverage.classList.add('cocktail-beverage');

      main.append(beverage);

      main.classList.add('cocktail-main');
      stem.classList.add('cocktail-stem');
      bottom.classList.add('cocktail-bottom');

      drink.append(main);
      drink.append(stem);
      drink.append(bottom);

      drink.classList.add('drink-cocktail');
      beverage.style.borderTopColor = `#AA0000`;
    }

    shelf.append(drink);
  }
}
