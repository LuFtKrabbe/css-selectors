import './sass/style.scss';
import { GameCreator } from './components/game_initial/game-creator';
import { Drinks } from './components/drinks/drinks';

const game = new GameCreator();
game.start();

const orangeJuice = new Drinks('tumbler');
const mojito = new Drinks('cocktail');
const cognac = new Drinks('balloon');
orangeJuice.createDrink(30);
mojito.createDrink(40);
cognac.createDrink(40);
