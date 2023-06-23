import { type DataSelectorField } from '../../types/selector-interfaces';

export class SelectorField implements DataSelectorField {
  draw(): void {
    const selectorField = document.querySelector('.game-field-selector') as HTMLElement;

    const numberBlockContainer = document.createElement('div') as HTMLElement;
    numberBlockContainer.classList.add('selector-number-block-container');
    selectorField.append(numberBlockContainer);

    for (let i = 1; i < 21; i++) {
      const numberBlock = document.createElement('div') as HTMLElement;
      numberBlock.classList.add('selector-number-block');
      numberBlock.innerHTML = `${i}`;
      numberBlockContainer.append(numberBlock);
    }
  }
}
