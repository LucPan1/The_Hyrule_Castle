import chooseDifficulty from "./difficultCombat"
import difficultCombatBoss from "./difficultCombatBoss"
import { getPlayer } from "../../../base_game/playerChoice";
import Character from "../../../base_game/interface /character";

const fs = require('fs');

export default function floor()
{   
    // getPlayer 
    let player: Character = getPlayer("../../json/players.json")
    let maxHp = player.hp;
    for(let i = 1; i < 10; i++)
    {
        chooseDifficulty(player, maxHp);
    }
    for(let i = 1; i < 2; i++)
    {
        difficultCombatBoss(player, maxHp);
    }
}

// floor()
