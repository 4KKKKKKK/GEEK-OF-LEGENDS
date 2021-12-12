import{startGame,randomBoss,fight} from './module/action.js'


let boss = randomBoss();

startGame(boss);
fight(boss);