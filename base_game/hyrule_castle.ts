import getCombat from "./combat";
import getBosses from "./combatBoss"
import { getPlayer } from "./playerChoice";
import Character from "./interface /character";

export default function floor()
{   
    // getPlayer 
    let player: Character = getPlayer("../json/players.json")
    let maxHp: number = player.hp;
    for(let i: number = 1; i < 10; i++)
    {
        getCombat(player, maxHp);
    }
    for(let i: number = 1; i < 2; i++)
    {
        getBosses(player, maxHp);
    }
}

floor()
