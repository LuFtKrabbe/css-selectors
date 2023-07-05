import { type DataSelectorCodeBlock } from '../../types/interfaces';
import { elemHTMLClassAttr } from '../../utilities/functions';

export class SelectorCodeBlock implements DataSelectorCodeBlock {
  draw(): void {
    const gameFieldWrapper = document.querySelector('.game-field-wrapper') as HTMLElement;
    const selectorCodeBlockWrapper = elemHTMLClassAttr('game-field-selector-code-wrapper')();
    const selectorCodeBlock = elemHTMLClassAttr('selector-code')();

    gameFieldWrapper.append(selectorCodeBlockWrapper);
    selectorCodeBlockWrapper.append(selectorCodeBlock);
  }
}
