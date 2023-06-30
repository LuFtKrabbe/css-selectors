import { type DataLevelCreator } from '../../types/level-creator-interfaces';
import { Drinks, GLASS, COLOR, BEVERAGE } from '../../drinks/drinks';

export class LevelCreator implements DataLevelCreator {
  loadLevel(levelNumber: number): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    shelf.replaceChildren();
    const code = document.querySelector('.code-block-container') as HTMLElement;
    code.replaceChildren();
    if (levelNumber === 1) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50);
      drink2.createDrink(50);
      drink3.createDrink(40);
      drink1.createCode();
      drink2.createCode();
      drink3.createCode();
    }
    if (levelNumber === 2) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50);
      drink2.createDrink(50);
      drink3.createDrink(40);
      drink1.createCode();
      drink2.createCode();
      drink3.createCode();
    }
    if (levelNumber === 3) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50);
      drink2.createDrink(50);
      drink3.createDrink(40);
      drink1.createCode();
      drink2.createCode();
      drink3.createCode();
    }
  }
}
