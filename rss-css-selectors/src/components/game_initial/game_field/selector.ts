import { type DataSelectorBlock } from '../../types/interfaces';

export class SelectorBlock implements DataSelectorBlock {
  draw(): void {
    const selectorCodeBlock = document.querySelector('.selector-code') as HTMLElement;

    const selectorBlock = document.createElement('div');
    selectorBlock.classList.add('game-field-selector');
    selectorCodeBlock.append(selectorBlock);

    const inputContainer = document.createElement('div') as HTMLElement;
    inputContainer.classList.add('selector-input-container');

    selectorBlock.append(inputContainer);

    const input = document.createElement('input') as HTMLElement;
    input.classList.add('selector-input');
    input.setAttribute('type', 'text');
    input.setAttribute('size', '30');
    input.setAttribute('size', '16');

    inputContainer.append(input);

    const button = document.createElement('div') as HTMLElement;
    button.classList.add('selector-button');
    button.innerText = 'Enter';

    inputContainer.append(button);

    const tips = document.createElement('div') as HTMLElement;
    tips.classList.add('selector-tips');

    selectorBlock.append(tips);
  }
}
