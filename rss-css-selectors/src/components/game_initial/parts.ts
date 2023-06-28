import { type DataParts } from '../types/parts-interfaces';

export class Parts implements DataParts {
  draw(): void {
    const body = document.querySelector('.body') as HTMLElement;

    const header = document.createElement('header');
    header.classList.add('header');
    const main = document.createElement('main');
    main.classList.add('main');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    body.append(header, main, footer);

    const levelBlockWrapper = document.createElement('div') as HTMLElement;
    levelBlockWrapper.classList.add('game-level-wrapper');
    const gameBlockWrapper = document.createElement('div') as HTMLElement;
    gameBlockWrapper.classList.add('game-field-wrapper');

    main.append(gameBlockWrapper, levelBlockWrapper);
  }
}
