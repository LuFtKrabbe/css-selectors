import { type DataSelectorField } from '../../types/selector-interfaces';

export class SelectorField implements DataSelectorField {
  draw(): void {
    const selectorField = document.querySelector('.game-field-selector') as HTMLElement;

    const inputContainer = document.createElement('div') as HTMLElement;
    inputContainer.classList.add('selector-input-container');

    selectorField.append(inputContainer);

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

    selectorField.append(tips);
  }
}
