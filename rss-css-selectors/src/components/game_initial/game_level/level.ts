import { type DataLevelBlock } from '../../types/level-interfaces';

export class LevelBlock implements DataLevelBlock {
  draw(): void {
    const levelBlockWrapper = document.querySelector('.game-level-wrapper') as HTMLElement;

    const levelBlock = document.createElement('div') as HTMLElement;
    levelBlock.classList.add('game-level');

    levelBlockWrapper.append(levelBlock);
  }
}
