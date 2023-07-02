import { type DataCodeBlock } from '../../types/interfaces';

export class CodeBlock implements DataCodeBlock {
  draw(): void {
    const selectorCodeBlock = document.querySelector('.selector-code') as HTMLElement;

    const codeBlock = document.createElement('div');
    codeBlock.classList.add('game-field-code');
    selectorCodeBlock.append(codeBlock);

    const numberBlockContainer = document.createElement('div') as HTMLElement;
    numberBlockContainer.classList.add('number-block-container');
    codeBlock.append(numberBlockContainer);

    for (let i = 1; i < 21; i++) {
      const numberBlock = document.createElement('div') as HTMLElement;
      numberBlock.classList.add('number-block');
      numberBlock.innerHTML = `${i}`;
      numberBlockContainer.append(numberBlock);
    }

    const codeBlockContainer = document.createElement('div') as HTMLElement;
    codeBlockContainer.classList.add('code-block-container');
    codeBlock.append(codeBlockContainer);

    const codeFirstLine = document.createElement('div') as HTMLElement;
    codeFirstLine.classList.add('code-first-line');
    codeFirstLine.innerText = '<div class="shelf">';

    codeBlockContainer.append(codeFirstLine);

    const codeBlockLines = document.createElement('div') as HTMLElement;
    codeBlockLines.classList.add('code-block-lines');

    codeBlockContainer.append(codeBlockLines);

    const codeLastLine = document.createElement('div') as HTMLElement;
    codeLastLine.classList.add('code-last-line');
    codeLastLine.innerText = '</div>';

    codeBlockContainer.append(codeLastLine);
  }
}
