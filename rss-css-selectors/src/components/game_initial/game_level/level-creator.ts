import { type DataLevelCreator } from '../../types/level-creator-interfaces';
import { Drinks, GLASS, COLOR, BEVERAGE } from '../../drinks/drinks';

export class LevelCreator implements DataLevelCreator {
  static levelAnswer: string;

  clearLevel(): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const code = document.querySelector('.code-block-lines') as HTMLElement;
    shelf.replaceChildren();
    code.replaceChildren();
  }

  loadLevel(levelNumber: number): void {
    this.clearLevel();
    if (levelNumber === 1) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50, 1, 'true');
      drink2.createDrink(50, 2, 'true');
      drink3.createDrink(40, 3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
      LevelCreator.levelAnswer = 'tumbler';
    }
    if (levelNumber === 2) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50, 1, 'true');
      drink2.createDrink(50, 2, 'false');
      drink3.createDrink(40, 3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
      LevelCreator.levelAnswer = 'cocktail';
    }
    if (levelNumber === 3) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50, 1, 'false');
      drink2.createDrink(50, 2, 'true');
      drink3.createDrink(40, 3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
    }
    if (levelNumber === 10) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE);
      drink1.createDrink(50, 1, 'false');
      drink2.createDrink(50, 2, 'true');
      drink3.createDrink(40, 3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
      LevelCreator.levelAnswer = 't';
    }
  }
}
