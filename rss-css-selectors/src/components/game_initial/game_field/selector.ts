import { type DataSelectorBlock } from '../../types/interfaces';
import { elemHTMLClassAttr } from '../../utilities/functions';

export class SelectorBlock implements DataSelectorBlock {
  draw(): void {
    const selectorCodeBlock = document.querySelector('.selector-code') as HTMLElement;

    const selectorBlock = elemHTMLClassAttr('game-field-selector')();
    const inputContainer = elemHTMLClassAttr('selector-input-container')();
    const tips = elemHTMLClassAttr('selector-tips')();

    const input = elemHTMLClassAttr('selector-input', 'input')('placeholder', 'Type CSS selector here...');
    input.classList.add('waiting');
    input.setAttribute('type', 'text');
    input.setAttribute('size', '30');
    input.setAttribute('size', '16');

    const button = elemHTMLClassAttr('selector-button')();
    button.innerText = 'Enter';

    selectorCodeBlock.append(selectorBlock);
    selectorBlock.append(inputContainer, tips);
    inputContainer.append(input, button);
  }
}
