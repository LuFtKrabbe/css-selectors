import { type DataLevelManager } from '../../types/level-manager-interfaces';
import { LevelCreator } from './level-creator';

export class LevelManager extends LevelCreator implements DataLevelManager {
  static currentLevel = 1;
  static levelsState = [
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
    'finished-none',
  ];

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

  useLevelTip(event: Event): void {
    const element = event.target as HTMLElement;
    const elementSibling = element.previousElementSibling as HTMLElement;
    if (element.matches('[state = finished-none]') && elementSibling.matches('[current = true]')) {
      this.setStateLevel('finished-tip');
    }
    if (element.matches('.level-help')) {
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

  resetLevels(): void {
    LevelManager.currentLevel = 1;
    LevelManager.levelsState.fill('finished-none');

    document.querySelectorAll('.level-state').forEach((state) => {
      state.setAttribute('state', 'finished-none');
      state.innerHTML = '?';
    });

    this.setCurrentLevel();
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
      if (Number(levelName.getAttribute('level')) === LevelManager.currentLevel) {
        levelName.setAttribute('current', 'true');
      } else {
        levelName.setAttribute('current', 'false');
      }
    });
    this.loadLevel(LevelManager.currentLevel);
  }

  createTabs(): void {
    window.addEventListener('beforeunload', this.saveStateLevels.bind(this));
    this.loadStateLevels();

    const levelBlock = document.querySelector('.game-level') as HTMLElement;

    levelBlock.addEventListener('click', this.useLevelTip.bind(this));
    levelBlock.addEventListener('click', this.switchLevel.bind(this));

    for (let i = 1; i <= LevelManager.levelsState.length; i += 1) {
      const levelTablet = document.createElement('div') as HTMLElement;
      levelTablet.classList.add('level-tablet');
      levelTablet.setAttribute('level', `${i}`);
      levelBlock.append(levelTablet);

      const levelName = document.createElement('div') as HTMLElement;
      levelName.classList.add('level-name');
      levelName.innerText = `Level ${i}`;
      levelName.setAttribute('level', `${i}`);
      if (LevelManager.currentLevel === i) {
        levelName.setAttribute('current', 'true');
        this.loadLevel(LevelManager.currentLevel);
      } else {
        levelName.setAttribute('current', 'false');
      }

      const levelState = document.createElement('div') as HTMLElement;
      levelState.classList.add('level-state');
      levelState.setAttribute('state', `${LevelManager.levelsState[i - 1]}`);
      levelState.setAttribute('level', `${i}`);
      if (LevelManager.levelsState[i - 1] === 'finished-none') {
        levelState.innerHTML = '?';
      } else {
        levelState.innerHTML = '&#128504';
      }
      levelTablet.append(levelName, levelState);
    }

    const levelHelpButton = document.createElement('div') as HTMLElement;
    levelHelpButton.classList.add('level-help');
    levelHelpButton.innerHTML = 'HELP';
    levelBlock.append(levelHelpButton);

    const levelResetButton = document.createElement('div') as HTMLElement;
    levelResetButton.classList.add('level-reset');
    levelResetButton.innerHTML = 'Reset progress';
    levelBlock.append(levelResetButton);

    levelHelpButton.addEventListener('click', this.useLevelTip.bind(this));
    levelResetButton.addEventListener('click', this.resetLevels.bind(this));
  }
}
