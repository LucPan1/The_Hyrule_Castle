import { getBoss } from "./playerChoice";
const readline = require('readline-sync');
import Character from "./interface /character";
// let player: Character = getPlayer("../json/players.json")

export default function combat(playerCombatBoss: Character, maxHp: number)
{
    
    let boss = getBoss("../json/bosses.json")
    // maxHp = playerCombatBoss.hp;
    // let regenHp: number = 0; 
    const hpMaxBoss: number = boss.hp;
    // console.log('La vie de ennemy avant tout :' + enemy.hp);
    let fightId: number = 0;
    while(playerCombatBoss.hp > 0 && boss.hp > 0)
    {
        let barre_vie: string = "\x1b[36mI\x1b[0m";

        console.log(`=================== FIGHT ${fightId + 1}  ===================`);
        console.log("\n");
        console.log(`\x1b[34m${playerCombatBoss.name}\x1b[0m`);
        console.log(`HP: ${barre_vie.repeat(playerCombatBoss.hp > 0 ? playerCombatBoss.hp : 0)} \x1b[33m${playerCombatBoss.hp}\x1b[0m / \x1b[33m${maxHp}\x1b[0m`);
        console.log("\n");
        console.log(`\x1b[31m${boss.name}\x1b[0m`);
        console.log(`HP: ${barre_vie.repeat(boss.hp > 0 ? boss.hp : 0)} \x1b[33m${boss.hp}\x1b[0m / \x1b[33m${hpMaxBoss}\x1b[0m`);
        fightId++;
        // console.log(`La vie de ${playerCombat.name} :${playerCombat.hp}`);
        // console.log(`La vie de ${enemy.name} :${enemy.hp}`);
        // console.log(`Le str de personnage ${playerCombat.str} et le str de l'enemie est ${enemy.str}`);
        const options = ["Attack", "Heal"]
        const choice = readline.keyInSelect(options, "Attack or Heal ?")
        console.log("\n");

        
        if(choice + 1 === 1)
        {   
            if(playerCombatBoss.hp <= maxHp)
            {
                playerCombatBoss.hp = playerCombatBoss.hp - boss.str;
                boss.hp = boss.hp - playerCombatBoss.str;   
            }
            
           console.log("Vous avez " + playerCombatBoss.hp + "hp");
           
           if(boss.hp <= 0) {
            boss.hp = 0
            console.log("L'enemie à " + boss.hp + "hp");
            
            
           }
            
            
        }
        else if(choice + 1 === 2)
        {
            
            console.log("Vous avez " + playerCombatBoss.hp + "hp");
            if(playerCombatBoss.hp < maxHp)
            {
                 // playHp = max
                 console.log("On va heal de " + (maxHp / 2));
                 playerCombatBoss.hp += (maxHp / 2);
                 if(playerCombatBoss.hp > maxHp)
                 {
                     
                    playerCombatBoss.hp = maxHp;
                 }
 
                 // playerCombat.hp += maxHp / 2; // La c'est pas bon, il faut bien faire ce truc !!!!
                 playerCombatBoss.hp = playerCombatBoss.hp - boss.str;
            }
            else {
                console.log("Vous ne pouvez pas vous heal !");
                
            }

  
               console.log("Vous ne pouvez pas vous heal !");
               
            console.log("Vous avez maintenant: " + playerCombatBoss.hp + "hp");
        }
        else
        {
            process.exit();
        }        
        // console.log("Il te reste " + player.hp + "hp");
        // console.log("\n");
        
    }
    if(boss.hp === 0) {
       console.log(`Congratulations! You defeated ${boss.name} !!\n`);
            
    } else {
        console.log("You lose\n"); 
        process.exit();
    }
}
// combat()

