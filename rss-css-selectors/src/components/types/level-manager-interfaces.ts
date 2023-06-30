export interface DataLevelManager {
  saveStateLevels: () => void;
  loadStateLevels: () => void;
  setStateLevel: (event: Event) => void;
  createTabs: () => void;
}
