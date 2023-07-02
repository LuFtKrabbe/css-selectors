import { type DataLevelCreator } from '../../types/level-creator-interfaces';
import { Drinks, GLASS, COLOR, BEVERAGE, FULLNESS } from '../../drinks/drinks';

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
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      drink1.createDrink(1, 'true');
      drink2.createDrink(2, 'true');
      drink3.createDrink(3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
      LevelCreator.levelAnswer = 'tumbler';
    }
    if (levelNumber === 2) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA, FULLNESS.HALF);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.JUICE, FULLNESS.FULL);
      drink1.createDrink(1, 'true');
      drink2.createDrink(2, 'false');
      drink3.createDrink(3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
      LevelCreator.levelAnswer = 'cocktail';
    }
    if (levelNumber === 3) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.WINE, FULLNESS.HALF);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA, FULLNESS.FULL);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.JUICE, FULLNESS.HALF);
      drink1.createDrink(1, 'false');
      drink2.createDrink(2, 'true');
      drink3.createDrink(3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
    }
    if (levelNumber === 10) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA, FULLNESS.FULL);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      drink1.createDrink(1, 'false');
      drink2.createDrink(2, 'true');
      drink3.createDrink(3, 'false');
      drink1.createCode(1);
      drink2.createCode(2);
      drink3.createCode(3);
      LevelCreator.levelAnswer = 't';
    }
  }
}
