import { type DataSelectorCodeBlock } from '../../types/selector-code-interfaces';

export class SelectorCodeBlock implements DataSelectorCodeBlock {
  draw(): void {
    const gameFieldWrapper = document.querySelector('.game-field-wrapper') as HTMLElement;
    const selectorCodeBlockWrapper = document.createElement('div') as HTMLElement;
    selectorCodeBlockWrapper.classList.add('game-field-selector-code-wrapper');

    const selectorCodeBlock = document.createElement('div') as HTMLElement;
    selectorCodeBlock.classList.add('selector-code');

    gameFieldWrapper.append(selectorCodeBlockWrapper);
    selectorCodeBlockWrapper.append(selectorCodeBlock);
  }
}
