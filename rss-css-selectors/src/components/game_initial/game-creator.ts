import { CodeField } from './game_field/code';
import { SelectorField } from './game_field/selector';
import { type DataCodeField } from '../types/code-interfaces';
import { type DataSelectorField } from '../types/selector-interfaces';

export class GameCreator {
  private readonly codeField: DataCodeField;
  private readonly selectorField: DataSelectorField;

  constructor() {
    this.codeField = new CodeField();
    this.selectorField = new SelectorField();
  }

  start(): void {
    this.codeField.draw();
    this.selectorField.draw();
  }
}
