import { type DataLevelChecker } from '../../types/interfaces';
import { LevelCreator } from './level-creator';
import { LevelManager } from './level-manager';

export class LevelChecker extends LevelManager implements DataLevelChecker {
  check(): void {
    const drinks = document.querySelectorAll(`[answer='true']`);
    const input = document.querySelector('.selector-input') as HTMLInputElement;
    const info = document.querySelector('.selector-input-container') as HTMLElement;

    if (LevelCreator.levelAnswers.includes(input.value)) {
      drinks.forEach((drink) => {
        drink.classList.add('drink-level-passed');
      });
    } else {
      info.classList.add('selector-wrong');
    }
  }

  checkByKey(event: KeyboardEvent): void {
    const button = document.querySelector('.selector-button') as HTMLElement;

    if (event.code === 'Enter' && event.type === 'keydown') {
      button.classList.add('push-key');
      this.check();
    }

    if (event.code === 'Enter' && event.type === 'keyup') {
      button.classList.remove('push-key');
    }
  }

  checkAnswer(): void {
    const button = document.querySelector('.selector-button') as HTMLElement;
    const info = document.querySelector('.selector-input-container') as HTMLElement;
    const shelf = document.querySelector('.visual-shelf-top-bar') as HTMLElement;
    const backBoard = document.querySelector('.visual-shelf-back-board') as HTMLElement;

    button.addEventListener('click', this.check);
    window.addEventListener('keydown', this.checkByKey.bind(this));
    window.addEventListener('keyup', this.checkByKey.bind(this));

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
        } else if (LevelManager.currentLevel !== LevelManager.levelsState.length) {
          LevelManager.currentLevel += 1;
          this.setCurrentLevel();
        } else {
          const nextLevel = LevelManager.levelsState.indexOf('finished-none') + 1;
          LevelManager.currentLevel = nextLevel;
          this.setCurrentLevel();
        }
      }
    });
  }
}
