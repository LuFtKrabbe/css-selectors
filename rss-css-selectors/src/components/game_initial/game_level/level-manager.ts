import { type DataLevelManager } from '../../types/interfaces';
import { LevelCreator } from './level-creator';
import { elemHTMLClassAttr } from '../../utilities/functions';

export class LevelManager extends LevelCreator implements DataLevelManager {
  static currentLevel = 1;
  static levelsQuantity = 10;
  static levelsState: string[] = Array(LevelManager.levelsQuantity).fill('finished-none');

  saveStateLevels(): void {
    localStorage.setItem('levels-state', JSON.stringify(LevelManager.levelsState));
    localStorage.setItem('current-level', JSON.stringify(LevelManager.currentLevel));
  }

  loadStateLevels(): void {
    const storageLevelsState: string | null = localStorage.getItem('levels-state');
    if (storageLevelsState !== null && storageLevelsState !== 'undefined') {
      LevelManager.levelsState = JSON.parse(storageLevelsState);
    }
    const storageCurrentLevel: string | null = localStorage.getItem('current-level');
    if (storageCurrentLevel !== null && storageCurrentLevel !== 'undefined') {
      LevelManager.currentLevel = JSON.parse(storageCurrentLevel);
    }
  }

  createTabs(): void {
    const levelBlock = document.querySelector('.game-level') as HTMLElement;

    for (let i = 1; i <= LevelManager.levelsQuantity; i += 1) {
      const levelTablet = elemHTMLClassAttr('level-tablet')('level', `${i}`);
      const levelState = elemHTMLClassAttr('level-state')('level', `${i}`);
      const levelName = elemHTMLClassAttr('level-name')('level', `${i}`);

      levelState.setAttribute('state', `${LevelManager.levelsState[i - 1]}`);
      levelName.innerText = `Level ${i}`;

      levelBlock.append(levelTablet);
      levelTablet.append(levelName, levelState);

      if (LevelManager.currentLevel === i) {
        levelName.setAttribute('current', 'true');
      } else {
        levelName.setAttribute('current', 'false');
      }

      if (LevelManager.levelsState[i - 1] === 'finished-none') {
        levelState.innerHTML = '?';
      } else {
        levelState.innerHTML = '&#128504';
      }

      this.loadLevel(LevelManager.currentLevel);
    }

    const helpButton = elemHTMLClassAttr('level-help')();
    const resetButton = elemHTMLClassAttr('level-reset')();
    helpButton.innerHTML = 'HELP';
    resetButton.innerHTML = 'RESET';
    levelBlock.append(helpButton, resetButton);

    levelBlock.addEventListener('click', this.switchLevel.bind(this));
    levelBlock.addEventListener('click', this.useLevelTip.bind(this));
    resetButton.addEventListener('click', this.resetLevels.bind(this));
    window.addEventListener('beforeunload', this.saveStateLevels.bind(this));
  }

  useLevelTip(event: Event): void {
    const element = event.target as HTMLElement;
    const elementSibling = element.previousElementSibling as HTMLElement;
    const backBoard = document.querySelector('.visual-shelf-back-board') as HTMLElement;
    if (
      (element.matches('[state = finished-none]') && elementSibling.matches('[current = true]')) ||
      element.matches('.level-help')
    ) {
      this.printLevelTip();
      this.setStateLevel('finished-tip');
    }
    if (!LevelManager.levelsState.includes('finished-none')) {
      this.clearLevel();
      backBoard.classList.add('win');
      backBoard.innerHTML = '! GAME WIN !';
    }
  }

  printLevelTip(): void {
    const task = document.querySelector('.selector-tips') as HTMLElement;
    task.innerHTML = 'Possible answers: ' + LevelCreator.levelAnswers.join(' | ');

    const input = document.querySelector('.selector-input') as HTMLInputElement;
    const answer = LevelCreator.levelAnswers[0];
    let i = 0;
    const printer = setInterval(() => {
      if (i < answer.length) {
        input.value += answer[i];
        i += 1;
      } else {
        clearInterval(printer);
      }
    }, 150);
  }

  setStateLevel(state: string): void {
    const currentLevel = document.querySelector(`[current='true']`) as HTMLElement;
    const currentLevelState = currentLevel.nextElementSibling as HTMLElement;
    if (currentLevelState.getAttribute('state') !== 'finished-tip') {
      currentLevelState.setAttribute('state', `${state}`);
      currentLevelState.innerHTML = '&#128504';
      const levelNumber = Number(currentLevel.getAttribute('level')) - 1;
      LevelManager.levelsState[levelNumber] = `${state}`;
    }
  }

  switchLevel(event: Event): void {
    const element = event.target as HTMLElement;
    if (element.matches('.level-name')) {
      LevelManager.currentLevel = Number(element.getAttribute('level'));
    }
    this.setCurrentLevel();
  }

  setCurrentLevel(): void {
    document.querySelectorAll('.level-name').forEach((levelName) => {
      levelName.setAttribute('current', 'false');
      if (Number(levelName.getAttribute('level')) === LevelManager.currentLevel) {
        levelName.setAttribute('current', 'true');
      }
    });
    this.loadLevel(LevelManager.currentLevel);
  }

  resetLevels(): void {
    LevelManager.currentLevel = 1;
    LevelManager.levelsState.fill('finished-none');

    const backBoard = document.querySelector('.visual-shelf-back-board') as HTMLElement;
    backBoard.classList.remove('win');
    backBoard.innerHTML = '';

    document.querySelectorAll('.level-state').forEach((state) => {
      state.setAttribute('state', 'finished-none');
      state.innerHTML = '?';
    });

    this.setCurrentLevel();
  }
}
