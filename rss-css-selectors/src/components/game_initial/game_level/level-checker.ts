import { type DataLevelChecker } from '../../types/interfaces';
import { LevelCreator } from './level-creator';
import { LevelManager } from './level-manager';

export class LevelChecker extends LevelManager implements DataLevelChecker {
  check(): void {
    const drinks = document.querySelectorAll(`[answer='true']`);
    const input = document.querySelector('.selector-input') as HTMLInputElement;
    const info = document.querySelector('.selector-input-container') as HTMLElement;

    if (input.value === LevelCreator.levelAnswer) {
      drinks.forEach((drink) => {
        drink.classList.add('drink-level-passed');
      });
    } else {
      info.classList.add('selector-wrong');
    }
  }

  checkAnswer(): void {
    const button = document.querySelector('.selector-button') as HTMLElement;
    const info = document.querySelector('.selector-input-container') as HTMLElement;
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const backBoard = document.querySelector('.visual-shelf-back-board') as HTMLElement;
    button.addEventListener('click', this.check);

    info.addEventListener('animationend', (animationEvent) => {
      if (animationEvent.animationName === 'wrong-shake') {
        info.classList.remove('selector-wrong');
      }
    });

    shelf.addEventListener('animationend', (animationEvent) => {
      if (animationEvent.animationName === 'correct-level-pass') {
        this.setStateLevel('finished-clear');

        if (!LevelManager.levelsState.includes('finished-none')) {
          this.clearLevel();
          backBoard.classList.add('win');
          backBoard.innerHTML = '! GAME WIN !';
        } else {
          const nextLevel = LevelManager.levelsState.indexOf('finished-none') + 1;
          LevelManager.currentLevel = nextLevel;
          this.setCurrentLevel();
        }
      }
    });
  }
}
