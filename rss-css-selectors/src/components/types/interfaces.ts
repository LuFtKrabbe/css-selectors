import { type GLASS, type COLOR, type BEVERAGE, type FULLNESS } from './enums';

export interface DataParts {
  draw: () => void;
}

export interface DataVisualBlock {
  draw: () => void;
}

export interface DataSelectorCodeBlock {
  draw: () => void;
}

export interface DataSelectorBlock {
  draw: () => void;
}

export interface DataCodeBlock {
  draw: () => void;
}

export interface DataLevelBlock {
  draw: () => void;
}

export interface DataDrinks {
  glass: GLASS;
  color: COLOR;
  beverage: BEVERAGE;
  fullness: FULLNESS;
  showGlass: (event: Event) => void;
  leaveGlass: (event: Event) => void;
  showBeverage: (event: Event) => void;
  leaveBeverage: (event: Event) => void;
  showCode: (event: Event) => void;
  leaveCode: (event: Event) => void;
  createCode: (number: number) => void;
  createDrink: (number: number, answer: string) => void;
}

export interface DataLevelCreator {
  clearLevel: () => void;
  loadLevel: <T>(levelNumber: T) => void;
}

export interface DataLevelManager {
  saveStateLevels: () => void;
  loadStateLevels: () => void;
  setStateLevel: (state: string) => void;
  useLevelTip: (event: Event) => void;
  printLevelTip: () => void;
  switchLevel: (event: Event) => void;
  setCurrentLevel: () => void;
  resetLevels: () => void;
  createTabs: () => void;
}

export interface DataLevelChecker {
  check: () => void;
  checkByKey:(event: KeyboardEvent) => void
  checkAnswer: () => void;
}

export interface DataGameCreator {
  start: () => void;
}
