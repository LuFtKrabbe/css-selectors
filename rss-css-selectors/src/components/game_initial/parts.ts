import { type DataParts } from '../types/interfaces';

export class Parts implements DataParts {
  draw(): void {
    const body = document.querySelector('.body') as HTMLElement;

    const header = document.createElement('header');
    header.classList.add('header');

    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menu-icon');
    header.append(menuIcon);

    const main = document.createElement('main');
    main.classList.add('main');

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footer.append(footerContent);

    const contentLuftkrabbe = document.createElement('a') as HTMLElement;
    contentLuftkrabbe.classList.add('luftkrabbe');
    contentLuftkrabbe.setAttribute('href', 'https://github.com/LuFtKrabbe');

    const contentYear = document.createElement('p') as HTMLElement;
    contentYear.classList.add('year');
    contentYear.innerHTML = '2023';

    const contentLogo = document.createElement('a') as HTMLElement;
    contentLogo.classList.add('logo');
    contentLogo.setAttribute('href', 'https://rs.school/js/');
    footerContent.append(contentLuftkrabbe, contentYear, contentLogo);

    body.append(header, main, footer);

    const levelBlockWrapper = document.createElement('div') as HTMLElement;
    levelBlockWrapper.classList.add('game-level-wrapper');
    const gameBlockWrapper = document.createElement('div') as HTMLElement;
    gameBlockWrapper.classList.add('game-field-wrapper');

    main.append(gameBlockWrapper, levelBlockWrapper);
  }
}

