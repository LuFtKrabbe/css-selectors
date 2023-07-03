import { Parts } from './parts';
import { VisualBlock } from './game_field/visual';
import { SelectorCodeBlock } from './game_field/selector-code';
import { CodeBlock } from './game_field/code';
import { SelectorBlock } from './game_field/selector';
import { LevelBlock } from './game_level/level';
import { LevelManager } from './game_level/level-manager';
import { LevelChecker } from './game_level/level-checker';
import {
  type DataParts,
  type DataVisualBlock,
  type DataSelectorCodeBlock,
  type DataSelectorBlock,
  type DataCodeBlock,
  type DataLevelBlock,
  type DataLevelManager,
  type DataLevelChecker,
} from '../types/interfaces';

export class GameCreator {
  parts: DataParts;
  visualBlock: DataVisualBlock;
  selectorCodeBlock: DataSelectorCodeBlock;
  selectorBlock: DataSelectorBlock;
  codeBlock: DataCodeBlock;
  levelBlock: DataLevelBlock;
  levelManager: DataLevelManager;
  levelChecker: DataLevelChecker;

  constructor() {
    this.parts = new Parts();
    this.visualBlock = new VisualBlock();
    this.selectorCodeBlock = new SelectorCodeBlock();
    this.selectorBlock = new SelectorBlock();
    this.codeBlock = new CodeBlock();
    this.levelBlock = new LevelBlock();
    this.levelManager = new LevelManager();
    this.levelChecker = new LevelChecker();
  }

  start(): void {
    this.parts.draw();
    this.visualBlock.draw();
    this.selectorCodeBlock.draw();
    this.selectorBlock.draw();
    this.codeBlock.draw();
    this.levelBlock.draw();
    this.levelManager.loadStateLevels();
    this.levelManager.createTabs();
    this.levelChecker.checkAnswer();
  }
}
