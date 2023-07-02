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
  glass: string;
  color: string;
  beverage: string;
  fullness: string;
  createDrink: (number: number, answer: string) => void;
}

export interface DataLevelCreator {
  loadLevel: (levelNumber: number) => void;
}

export interface DataLevelManager {
  saveStateLevels: () => void;
  loadStateLevels: () => void;
  setStateLevel: (state: string) => void;
  createTabs: () => void;
}

export interface DataLevelChecker {
  checkAnswer: () => void;
}
