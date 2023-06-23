import { type DataCodeField } from '../../types/code-interfaces'

export class CodeField implements DataCodeField {
  draw (): void {
    const codeField = document.querySelector('.game-field-code') as HTMLElement

    const numberBlockContainer = document.createElement('div') as HTMLElement
    numberBlockContainer.classList.add('number-block-container')
    codeField.append(numberBlockContainer)

    for (let i = 1; i < 21; i++) {
      const numberBlock = document.createElement('div') as HTMLElement
      numberBlock.classList.add('number-block')
      numberBlock.innerHTML = `${i}`
      numberBlockContainer.append(numberBlock)
    }
  }
}
