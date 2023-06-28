import { Parts } from './parts';
import { VisualBlock } from './game_field/visual';
import { SelectorCodeBlock } from './game_field/selector-code';
import { CodeBlock } from './game_field/code';
import { SelectorBlock } from './game_field/selector';
import { LevelBlock } from './game_level/level';
import { type DataParts } from '../types/parts-interfaces';
import { type DataVisualBlock } from '../types/visual-interfaces';
import { type DataSelectorCodeBlock } from '../types/selector-code-interfaces';
import { type DataCodeBlock } from '../types/code-interfaces';
import { type DataSelectorBlock } from '../types/selector-interfaces';
import { type DataLevelBlock } from '../types/level-interfaces';

export class GameCreator {
  parts: DataParts;
  visualBlock: DataVisualBlock;
  selectorCodeBlock: DataSelectorCodeBlock;
  selectorBlock: DataSelectorBlock;
  codeBlock: DataCodeBlock;
  levelBlock: DataLevelBlock;

  constructor() {
    this.parts = new Parts();
    this.visualBlock = new VisualBlock();
    this.selectorCodeBlock = new SelectorCodeBlock();
    this.selectorBlock = new SelectorBlock();
    this.codeBlock = new CodeBlock();
    this.levelBlock = new LevelBlock();
  }

  start(): void {
    this.parts.draw();
    this.visualBlock.draw();
    this.selectorCodeBlock.draw();
    this.selectorBlock.draw();
    this.codeBlock.draw();
    this.levelBlock.draw();
  }
}
