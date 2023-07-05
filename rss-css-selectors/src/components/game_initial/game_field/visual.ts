import { type DataVisualBlock } from '../../types/interfaces';
import { elemHTMLClassAttr } from '../../utilities/functions';

export class VisualBlock implements DataVisualBlock {
  draw(): void {
    const stripesQuantity = 7;
    const gameField = document.querySelector('.game-field-wrapper') as HTMLElement;

    const gameFieldVisualWrapper = elemHTMLClassAttr('game-field-visual-wrapper')();
    const gameFieldVisual = elemHTMLClassAttr('game-field-visual')();
    gameField.append(gameFieldVisualWrapper);
    gameFieldVisualWrapper.append(gameFieldVisual);

    const visualRoof = elemHTMLClassAttr('visual-roof')();
    const visualStage = elemHTMLClassAttr('visual-stage')();
    const visualFoundation = elemHTMLClassAttr('visual-foundation')();
    gameFieldVisual.append(visualRoof, visualStage, visualFoundation);

    for (let i = 1; i <= stripesQuantity; i += 1) {
      const roofStripe = elemHTMLClassAttr('roof-stripe')();
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

    const visualColumnLeft = elemHTMLClassAttr('visual-column')();
    const visualShelf = elemHTMLClassAttr('visual-shelf')();
    const visualColumnRight = elemHTMLClassAttr('visual-column')();
    visualStage.append(visualColumnLeft, visualShelf, visualColumnRight);

    const visualShelfTopBar = elemHTMLClassAttr('visual-shelf-top-bar')();
    const visualShelfTopBoard = elemHTMLClassAttr('visual-shelf-top-board')();
    const visualShelfBackBoard = elemHTMLClassAttr('visual-shelf-back-board')();
    const visualShelfBottomBoard = elemHTMLClassAttr('visual-shelf-bottom-board')();
    visualShelf.append(visualShelfTopBar, visualShelfTopBoard, visualShelfBackBoard, visualShelfBottomBoard);
  }
}
