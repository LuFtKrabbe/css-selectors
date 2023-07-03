import { type DataLevelManager } from '../../types/interfaces';
import { LevelCreator } from './level-creator';

export class LevelManager extends LevelCreator implements DataLevelManager {
  static currentLevel = 1;
  static levelsState: string[] = Array(10).fill('finished-none');

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

    for (let i = 1; i <= LevelManager.levelsState.length; i += 1) {
      const levelTablet = document.createElement('div') as HTMLElement;
      levelTablet.classList.add('level-tablet');
      levelTablet.setAttribute('level', `${i}`);
      levelBlock.append(levelTablet);

      const levelName = document.createElement('div') as HTMLElement;
      levelName.classList.add('level-name');
      levelName.innerText = `Level ${i}`;
      levelName.setAttribute('level', `${i}`);
      levelName.setAttribute('current', 'false');
      if (LevelManager.currentLevel === i) {
        levelName.setAttribute('current', 'true');
        this.loadLevel(LevelManager.currentLevel);
      }
      levelTablet.append(levelName);

      const levelState = document.createElement('div') as HTMLElement;
      levelState.classList.add('level-state');
      levelState.setAttribute('state', `${LevelManager.levelsState[i - 1]}`);
      levelState.setAttribute('level', `${i}`);
      levelState.innerHTML = '&#128504';
      if (LevelManager.levelsState[i - 1] === 'finished-none') {
        levelState.innerHTML = '?';
      }
      levelTablet.append(levelState);
    }

    const levelHelpButton = document.createElement('div') as HTMLElement;
    levelHelpButton.classList.add('level-help');
    levelHelpButton.innerHTML = 'HELP';
    levelBlock.append(levelHelpButton);

    const levelResetButton = document.createElement('div') as HTMLElement;
    levelResetButton.classList.add('level-reset');
    levelResetButton.innerHTML = 'RESET';
    levelBlock.append(levelResetButton);

    levelBlock.addEventListener('click', this.switchLevel.bind(this));
    levelBlock.addEventListener('click', this.useLevelTip.bind(this));
    levelHelpButton.addEventListener('click', this.useLevelTip.bind(this));
    levelResetButton.addEventListener('click', this.resetLevels.bind(this));
    window.addEventListener('beforeunload', this.saveStateLevels.bind(this));
  }

  useLevelTip(event: Event): void {
    const element = event.target as HTMLElement;
    const elementSibling = element.previousElementSibling as HTMLElement;
    if (
      (element.matches('[state = finished-none]') && elementSibling.matches('[current = true]')) ||
      element.matches('.level-help')
    ) {
      this.setStateLevel('finished-tip');
    }
  }

  setStateLevel(state: string): void {
    const currentLevel = document.querySelector(`[current='true']`) as HTMLElement;
    const currentLevelState = currentLevel.nextElementSibling as HTMLElement;
    currentLevelState.setAttribute('state', `${state}`);
    currentLevelState.innerHTML = '&#128504';
    const levelNumber = Number(currentLevel.getAttribute('level')) - 1;
    LevelManager.levelsState[levelNumber] = `${state}`;
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

    document.querySelectorAll('.level-state').forEach((state) => {
      state.setAttribute('state', 'finished-none');
      state.innerHTML = '?';
    });

    this.setCurrentLevel();
  }
}
