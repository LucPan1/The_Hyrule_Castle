import player from "./interface/player";
import Ennemy from "./interface/Ennemy";
import { getplayer, getEnnemy, getBoss } from "./playerChoice";

export default function displaygame(enemies: Ennemy, player: player) {

    let fightId: number = 0;
    let barre_vie: string = "I";



    console.log(`============== FIGHT ${fightId + 1}  ===================`);
    console.log(`${player.name}`);
    console.log(`HP:${barre_vie.repeat(player.hp > 0 ? player.hp : 0)}`);
    console.log(`${enemies.name}`);
    console.log(`HP:${barre_vie.repeat(enemies.hp > 0 ? enemies.hp : 0)}`);


    console.log(`-- - Options----------- `);
    console.log(`1. Attack        2. Heal`);
    console.log(`You attacked and dealt ${enemies.name}`);
    //console.log(`${ id } + ${ name } + ${ hp }`);
    fightId++;


}






//afficher link
const hero = getplayer('../json/players.json');
//afficher Bokonlin
const enemies = getEnnemy('../json/enemies.json');
displaygame(enemies, hero);
