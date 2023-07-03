import { type DataLevelBlock } from '../../types/interfaces';

export class LevelBlock implements DataLevelBlock {
  draw(): void {
    const levelBlockWrapper = document.querySelector('.game-level-wrapper') as HTMLElement;

    const levelBlock = document.createElement('div') as HTMLElement;
    levelBlock.classList.add('game-level');

    const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('active');
      levelBlock.classList.toggle('active');
    });

    levelBlockWrapper.append(levelBlock);
  }
}
