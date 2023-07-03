import { type DataLevelCreator } from '../../types/interfaces';
import { GLASS, COLOR, BEVERAGE, FULLNESS } from '../../types/enums';
import { Drinks } from '../../drinks/drinks';

export class LevelCreator implements DataLevelCreator {
  static levelQuestion: string;
  static levelAnswers: string[];
  static drinkAnswer: string[];
  static drinksArr: Drinks[];

  clearLevel(): void {
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const code = document.querySelector('.code-block-lines') as HTMLElement;
    const input = document.querySelector('.selector-input') as HTMLInputElement;
    shelf.replaceChildren();
    code.replaceChildren();
    input.value = '';
  }

  loadLevel<T>(levelNumber: T): void {
    this.clearLevel();
    if (levelNumber === 1 || levelNumber === '1') {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);

      LevelCreator.drinksArr = [drink1];
      LevelCreator.drinkAnswer = ['true'];
      LevelCreator.levelAnswers = ['tumbler', 'tumbler:empty'];
      LevelCreator.levelQuestion = 'Select the TUMBLER glass';
    }
    if (levelNumber === 2) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);

      LevelCreator.drinksArr = [drink1, drink2, drink3];
      LevelCreator.drinkAnswer = ['false', 'true', 'true'];
      LevelCreator.levelAnswers = ['balloon', 'balloon:empty'];
      LevelCreator.levelQuestion = 'Select the BALLOON glasses';
    }

    if (levelNumber === 3) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.PURPLE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);

      LevelCreator.drinksArr = [drink1, drink2, drink3];
      LevelCreator.drinkAnswer = ['false', 'true', 'false'];
      LevelCreator.levelAnswers = ['#purple', 'cocktail', 'cocktail:empty', 'cocktail#purple', '[id]', '[id=purple]'];
      LevelCreator.levelQuestion = 'Select the PURPLE COCKTAIL glass';
    }

    if (levelNumber === 4) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink3 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink4 = new Drinks(GLASS.BALLOON, COLOR.GREEN, BEVERAGE.NONE, FULLNESS.NONE);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4];
      LevelCreator.drinkAnswer = ['true', 'false', 'false', 'true'];
      LevelCreator.levelAnswers = ['#green', '[id]', '[id=green]'];
      LevelCreator.levelQuestion = 'Select GREEN glasses';
    }

    if (levelNumber === 5) {
      const drink1 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.PURPLE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink3 = new Drinks(GLASS.BALLOON, COLOR.GREEN, BEVERAGE.NONE, FULLNESS.NONE);
      const drink4 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink5 = new Drinks(GLASS.COCKTAIL, COLOR.BLUE, BEVERAGE.NONE, FULLNESS.NONE);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4, drink5];
      LevelCreator.drinkAnswer = ['false', 'true', 'false', 'true', 'true'];
      LevelCreator.levelAnswers = ['cocktail', 'cocktail:empty'];
      LevelCreator.levelQuestion = 'Select COCKTAIL glasses';
    }

    if (levelNumber === 6) {
      const drink1 = new Drinks(GLASS.BALLOON, COLOR.BLUE, BEVERAGE.COLA, FULLNESS.FULL);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.BLUE, BEVERAGE.COLA, FULLNESS.FULL);
      const drink3 = new Drinks(GLASS.TUMBLER, COLOR.PURPLE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink4 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink5 = new Drinks(GLASS.BALLOON, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.FULL);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4, drink5];
      LevelCreator.drinkAnswer = ['true', 'true', 'false', 'false', 'true'];
      LevelCreator.levelAnswers = ['cola', 'cola:first-child', 'cola:only-child', 'cola:last-child'];
      LevelCreator.levelQuestion = 'Select glasses with COLA';
    }

    if (levelNumber === 7) {
      const drink1 = new Drinks(GLASS.COCKTAIL, COLOR.BLUE, BEVERAGE.WINE, FULLNESS.FULL);
      const drink2 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.MILK, FULLNESS.HALF);
      const drink3 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.MILK, FULLNESS.FULL);
      const drink4 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.JUICE, FULLNESS.FULL);
      const drink5 = new Drinks(GLASS.BALLOON, COLOR.PURPLE, BEVERAGE.MILK, FULLNESS.FULL);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4, drink5];
      LevelCreator.drinkAnswer = ['false', 'true', 'true', 'false', 'false'];
      LevelCreator.levelAnswers = ['tumbler', 'tumbler milk'];
      LevelCreator.levelQuestion = 'Select TUMBLER glasses with MILK';
    }

    if (levelNumber === 8) {
      const drink1 = new Drinks(GLASS.BALLOON, COLOR.BLUE, BEVERAGE.COLA, FULLNESS.FULL);
      const drink2 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.JUICE, FULLNESS.HALF);
      const drink3 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.WINE, FULLNESS.FULL);
      const drink4 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.NONE, FULLNESS.NONE);
      const drink5 = new Drinks(GLASS.COCKTAIL, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.FULL);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4, drink5];
      LevelCreator.drinkAnswer = ['false', 'true', 'false', 'false', 'false'];
      LevelCreator.levelAnswers = ['cocktail juice.half', 'juice.half', 'juice', '[class = half]', '[class]'];
      LevelCreator.levelQuestion = 'Select the COCKTAIL glass with HALF portion of JUICE';
    }

    if (levelNumber === 9) {
      const drink1 = new Drinks(GLASS.COCKTAIL, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.HALF);
      const drink2 = new Drinks(GLASS.BALLOON, COLOR.BLUE, BEVERAGE.WINE, FULLNESS.HALF);
      const drink3 = new Drinks(GLASS.COCKTAIL, COLOR.PURPLE, BEVERAGE.MILK, FULLNESS.FULL);
      const drink4 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.JUICE, FULLNESS.HALF);
      const drink5 = new Drinks(GLASS.BALLOON, COLOR.BLUE, BEVERAGE.WINE, FULLNESS.FULL);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4, drink5];
      LevelCreator.drinkAnswer = ['false', 'true', 'false', 'false', 'true'];
      LevelCreator.levelAnswers = ['balloon#blue wine', 'wine', '#blue', '[id = blue]'];
      LevelCreator.levelQuestion = 'Select BLUE BALLOON glasses with WINE';
    }

    if (levelNumber === 10) {
      const drink1 = new Drinks(GLASS.BALLOON, COLOR.BLUE, BEVERAGE.JUICE, FULLNESS.FULL);
      const drink2 = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.WINE, FULLNESS.HALF);
      const drink3 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.COLA, FULLNESS.HALF);
      const drink4 = new Drinks(GLASS.BALLOON, COLOR.NONE, BEVERAGE.WINE, FULLNESS.FULL);
      const drink5 = new Drinks(GLASS.COCKTAIL, COLOR.NONE, BEVERAGE.JUICE, FULLNESS.HALF);
      const drink6 = new Drinks(GLASS.TUMBLER, COLOR.PURPLE, BEVERAGE.MILK, FULLNESS.FULL);

      LevelCreator.drinksArr = [drink1, drink2, drink3, drink4, drink5, drink6];
      LevelCreator.drinkAnswer = ['true', 'true', 'true', 'true', 'true', 'true'];
      LevelCreator.levelAnswers = ['*', 'tumbler, baloon, cocktail'];
      LevelCreator.levelQuestion = 'Select ALL glasses with beverages';
    }

    LevelCreator.drinksArr.forEach((drink, index) => {
      drink.createDrink(index + 1, LevelCreator.drinkAnswer[index]);
      drink.createCode(index + 1);
    });
    const task = document.querySelector('.selector-tips') as HTMLElement;
    task.innerHTML = LevelCreator.levelQuestion;
  }
}
