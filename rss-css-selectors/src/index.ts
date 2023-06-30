import './sass/style.scss';
import { GameCreator } from './components/game_initial/game-creator';
import { Drinks, GLASS, COLOR, BEVERAGE } from './components/drinks/drinks';
import { LevelManager } from './components/game_initial/game_level/level-manager';

const game = new GameCreator();
game.start();

const orangeJuice = new Drinks(GLASS.TUMBLER, COLOR.PURPLE, BEVERAGE.JUICE);
const mojito = new Drinks(GLASS.COCKTAIL, COLOR.GREEN, BEVERAGE.WINE);
const cognac = new Drinks(GLASS.BALLOON, COLOR.BLUE, BEVERAGE.COLA);
const cognac2 = new Drinks(GLASS.TUMBLER, COLOR.NONE, BEVERAGE.COLA);
orangeJuice.createDrink(100);
mojito.createDrink(50);
cognac.createDrink(40);
cognac2.createDrink(60);

const level1 = new LevelManager('unfinished');
level1.createTabs();
