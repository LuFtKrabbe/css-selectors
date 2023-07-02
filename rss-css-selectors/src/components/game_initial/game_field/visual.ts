import { type DataVisualBlock } from '../../types/interfaces';

export class VisualBlock implements DataVisualBlock {
  draw(): void {
    const gameField = document.querySelector('.game-field-wrapper') as HTMLElement;

    const gameFieldVisualWrapper = document.createElement('div');
    gameFieldVisualWrapper.classList.add('game-field-visual-wrapper');

    gameField.append(gameFieldVisualWrapper);

    const gameFieldVisual = document.createElement('div');
    gameFieldVisual.classList.add('game-field-visual');

    gameFieldVisualWrapper.append(gameFieldVisual);

    const visualRoof = document.createElement('div');
    visualRoof.classList.add('visual-roof');

    const visualStage = document.createElement('div');
    visualStage.classList.add('visual-stage');

    const visualFoundation = document.createElement('div');
    visualFoundation.classList.add('visual-foundation');

    gameFieldVisual.append(visualRoof, visualStage, visualFoundation);

    for (let i = 1; i <= 7; i += 1) {
      const roofStripe = document.createElement('div');
      roofStripe.classList.add('roof-stripe');
      if (i === 1) {
        roofStripe.classList.add('side-left');
      }
      if (i % 2 === 0) {
        roofStripe.classList.add('light');
      }
      if (i === 7) {
        roofStripe.classList.add('side-right');
      }
      visualRoof.append(roofStripe);
    }

    const visualColumnLeft = document.createElement('div');
    const visualColumnRight = document.createElement('div');
    visualColumnLeft.classList.add('visual-column');
    visualColumnRight.classList.add('visual-column');

    const visualShelf = document.createElement('div');
    visualShelf.classList.add('visual-shelf');

    visualStage.append(visualColumnLeft, visualShelf, visualColumnRight);

    const visualShelfTopBar = document.createElement('div');
    const visualShelfTopBoard = document.createElement('div');
    const visualShelfBackBoard = document.createElement('div');
    const visualShelfBottomBoard = document.createElement('div');
    visualShelfTopBar.classList.add('visual-shelf-top-bar');
    visualShelfTopBoard.classList.add('visual-shelf-top-board');
    visualShelfBackBoard.classList.add('visual-shelf-back-board');
    visualShelfBottomBoard.classList.add('visual-shelf-bottom-board');

    visualShelf.append(visualShelfTopBar, visualShelfTopBoard, visualShelfBackBoard, visualShelfBottomBoard);
  }
}
