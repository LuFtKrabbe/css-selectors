import { type DataLevelManager } from '../../types/level-manager-interfaces';
import { LevelCreator } from './level-creator';

export class LevelManager extends LevelCreator implements DataLevelManager {
  state: string;
  currentLevel = 1;
  levelsState = [
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

  constructor(state: string) {
    super();
    this.state = state;
  }

  saveStateLevels(): void {
    localStorage.setItem('levels-state', JSON.stringify(this.levelsState));
    localStorage.setItem('current-level', JSON.stringify(this.currentLevel));
  }

  loadStateLevels(): void {
    const storageLevelsState: string | null = localStorage.getItem('levels-state');
    if (storageLevelsState !== null && storageLevelsState !== 'undefined') {
      this.levelsState = JSON.parse(storageLevelsState);
    }
    const storageCurrentLevel: string | null = localStorage.getItem('current-level');
    if (storageCurrentLevel !== null && storageCurrentLevel !== 'undefined') {
      this.currentLevel = JSON.parse(storageCurrentLevel);
    }
  }

  setStateLevel(event: Event): void {
    const element = event.target as HTMLElement;
    const elementSibling = element.previousElementSibling as HTMLElement;
    if (element.matches('[state = finished-none]') && elementSibling.matches('[current = true]')) {
      element.setAttribute('state', 'finished-tip');
      element.innerHTML = '&#128504';
      const levelNumber = Number(element.getAttribute('level')) - 1;
      this.levelsState[levelNumber] = 'finished-tip';
    }
    if (element.matches('[progress = reset]')) {
      this.levelsState.fill('finished-none');
      const levelStates = document.querySelectorAll('.level-state');
      levelStates.forEach((levelState) => {
        levelState.setAttribute('state', 'finished-none');
        levelState.innerHTML = '?';
      });
    }
  }

  setCurrentLevel(event: Event): void {
    const element = event.target as HTMLElement;
    const levelNames = document.querySelectorAll('.level-name');
    if (element.matches('.level-name')) {
      this.currentLevel = Number(element.getAttribute('level'));
      levelNames.forEach((levelName) => {
        if (Number(levelName.getAttribute('level')) === this.currentLevel) {
          levelName.setAttribute('current', 'true');
        } else {
          levelName.setAttribute('current', 'false');
        }
      });
    }
    if (element.matches('[progress = reset]')) {
      this.currentLevel = 1;
      levelNames.forEach((levelName) => {
        if (Number(levelName.getAttribute('level')) === this.currentLevel) {
          levelName.setAttribute('current', 'true');
        } else {
          levelName.setAttribute('current', 'false');
        }
      });
    }
    this.loadLevel(this.currentLevel);
  }

  createTabs(): void {
    window.addEventListener('beforeunload', this.saveStateLevels.bind(this));
    this.loadStateLevels();
    const levelBlock = document.querySelector('.game-level') as HTMLElement;
    levelBlock.addEventListener('click', this.setStateLevel.bind(this));
    levelBlock.addEventListener('click', this.setCurrentLevel.bind(this));

    for (let i = 1; i <= this.levelsState.length; i += 1) {
      const levelTablet = document.createElement('div') as HTMLElement;
      levelTablet.classList.add('level-tablet');
      levelTablet.setAttribute('level', `${i}`);
      levelBlock.append(levelTablet);

      const levelName = document.createElement('div') as HTMLElement;
      levelName.classList.add('level-name');
      levelName.innerText = `Level ${i}`;
      levelName.setAttribute('level', `${i}`);
      if (this.currentLevel === i) {
        levelName.setAttribute('current', 'true');
        this.loadLevel(this.currentLevel);
      } else {
        levelName.setAttribute('current', 'false');
      }

      const levelState = document.createElement('div') as HTMLElement;
      levelState.classList.add('level-state');
      levelState.setAttribute('state', `${this.levelsState[i - 1]}`);
      levelState.setAttribute('level', `${i}`);
      if (this.levelsState[i - 1] === 'finished-none') {
        levelState.innerHTML = '?';
      } else {
        levelState.innerHTML = '&#128504';
      }
      levelTablet.append(levelName, levelState);
    }

    const levelReset = document.createElement('div') as HTMLElement;
    levelReset.classList.add('level-reset');
    levelReset.innerHTML = 'Reset progress';
    levelReset.setAttribute('progress', 'reset');
    levelBlock.append(levelReset);
  }
}
