import { CodeField } from './game_field/code'
import { type DataCodeField } from '../types/code-interfaces'

export class GameCreator {
  private readonly codeField: DataCodeField

  constructor () {
    this.codeField = new CodeField()
  }

  start (): void {
    this.codeField.draw()
  }
}
