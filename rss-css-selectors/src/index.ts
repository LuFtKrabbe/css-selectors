import './sass/style.scss';
import { GameCreator } from './components/game_initial/game-creator';
import { Drinks } from './components/drinks/drinks';

const game = new GameCreator();
game.start();

const orangeJuice = new Drinks('tumbler');
const mojito = new Drinks('cocktail');
orangeJuice.createDrink(70);
mojito.createDrink(40);
