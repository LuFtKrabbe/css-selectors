import { type DataLevelChecker } from '../../types/level-checker-interfaces';
// import { LevelManager } from './level-manager';

export class LevelChecker implements DataLevelChecker {
  checkAnswer(): void {
    const button = document.querySelector('.selector-button') as HTMLElement;
    button.addEventListener('click', check);

    const answer = 'mushrooms';
    const drinkNumber = 2;

    const info = document.querySelector('.selector-input-container') as HTMLElement;
    const drink = document.querySelector(`[glass-drink-number='${drinkNumber}']`) as HTMLElement;
    console.log(drink);

    info.addEventListener('animationend', (animationEvent) => {
      if (animationEvent.animationName === 'wrong-shake') {
        info.classList.remove('selector-wrong');
      }
    });

    drink.addEventListener('animationend', (animationEvent) => {
      if (animationEvent.animationName === 'pass-flight') {
        info.classList.remove('drink-true');
      }
    });

    function check(): void {
      const input = document.querySelector('.selector-input') as HTMLInputElement;
      if (input.value === answer) {
        drink.classList.add('drink-true');
      } else {
        info.classList.add('selector-wrong');
      }
    }
  }
}
