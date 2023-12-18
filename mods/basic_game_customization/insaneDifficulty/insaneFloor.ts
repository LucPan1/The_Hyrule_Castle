import chooseInsane from "./insaneCombatEnemies"
import insaneCombatBoss from "./insaneCombatBoss"
import { getPlayer } from "../../../base_game/playerChoice";
import Character from "../../../base_game/interface /character";

const fs = require('fs');

export default function floor()
{   
    // getPlayer 
    let player: Character = getPlayer("../../json/players.json")
    let maxHp = player.hp;
    for(let i = 1; i < 3; i++)
    {
        chooseInsane(player, maxHp);
    }
    for(let i = 1; i < 2; i++)
    {
        insaneCombatBoss(player, maxHp);
    }
}

// floor()
