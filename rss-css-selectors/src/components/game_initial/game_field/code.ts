import { type DataCodeBlock } from '../../types/interfaces';
import { elemHTMLClassAttr } from '../../utilities/functions';

export class CodeBlock implements DataCodeBlock {
  draw(): void {
    const stringsQuantity = 20;
    const selectorCodeBlock = document.querySelector('.selector-code') as HTMLElement;

    const codeBlock = elemHTMLClassAttr('game-field-code')();
    selectorCodeBlock.append(codeBlock);

    const numberBlockContainer = elemHTMLClassAttr('number-block-container')();
    for (let i = 1; i <= stringsQuantity; i++) {
      const numberBlock = elemHTMLClassAttr('number-block')();
      numberBlock.innerHTML = `${i}`;
      numberBlockContainer.append(numberBlock);
    }
    const codeBlockContainer = elemHTMLClassAttr('code-block-container')();
    codeBlock.append(numberBlockContainer, codeBlockContainer);

    const codeFirstLine = elemHTMLClassAttr('code-first-line')();
    const codeBlockLines = elemHTMLClassAttr('code-block-lines')();
    const codeLastLine = elemHTMLClassAttr('code-last-line')();
    codeFirstLine.innerText = '<div class="shelf">';
    codeLastLine.innerText = '</div>';
    codeBlockContainer.append(codeFirstLine, codeBlockLines, codeLastLine);
  }
}
