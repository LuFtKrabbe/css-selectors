export interface DataLevelManager {
  saveStateLevels: () => void;
  loadStateLevels: () => void;
  setStateLevel: (state: string) => void;
  createTabs: () => void;
}
