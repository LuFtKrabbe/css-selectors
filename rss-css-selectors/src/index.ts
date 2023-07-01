import './sass/style.scss';
import { GameCreator } from './components/game_initial/game-creator';
import { LevelManager } from './components/game_initial/game_level/level-manager';

const game = new GameCreator();
game.start();
