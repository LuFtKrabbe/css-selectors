import { type DataParts } from '../types/interfaces';
import { elemHTMLClassAttr } from '../utilities/functions';

export class Parts implements DataParts {
  draw(): void {
    const body = document.querySelector('.body') as HTMLElement;

    const header = elemHTMLClassAttr('header', 'header')();
    const main = elemHTMLClassAttr('main', 'main')();
    const footer = elemHTMLClassAttr('footer', 'footer')();

    body.append(header, main, footer);

    const menuIcon = elemHTMLClassAttr('menu-icon')();
    header.append(menuIcon);

    const footerContent = elemHTMLClassAttr('footer-content')();
    footer.append(footerContent);

    const contentLuftkrabbe = elemHTMLClassAttr('luftkrabbe', 'a')('href', 'https://github.com/LuFtKrabbe');
    const contentLogo = elemHTMLClassAttr('logo', 'a')('href', 'https://rs.school/js/');
    const contentYear = elemHTMLClassAttr('year', 'p')();
    contentYear.innerHTML = '2023';
    footerContent.append(contentLuftkrabbe, contentYear, contentLogo);

    const levelBlockWrapper = elemHTMLClassAttr('game-level-wrapper')();
    const gameBlockWrapper = elemHTMLClassAttr('game-field-wrapper')();
    main.append(gameBlockWrapper, levelBlockWrapper);
  }
}
