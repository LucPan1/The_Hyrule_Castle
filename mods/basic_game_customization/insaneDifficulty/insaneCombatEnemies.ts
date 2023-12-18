
import { getEnemy } from "./choiceInsane";
const readline = require('readline-sync');
// import getEnemies from "./enemies";
import Character from "../../../base_game/interface /character";
import Enemies from "../../../base_game/interface /enemies";


export default function combat(playerCombat : Character, maxHp: number)
{
    let enemy : Enemies = getEnemy("../../json/enemies.json")
    
    // maxHp = playerCombat.hp;
    // console.log('La vie de ennemy avant tout :' + enemy.hp);
    const hpMaxEnemy = enemy.hp;
    let fightId: number = 0;
    while (playerCombat.hp > 0 && enemy.hp > 0) {
        let barre_vie: string = "I";

        console.log(`============== FIGHT ${fightId + 1}  ===================`);
        console.log("\n");
        console.log(`${playerCombat.name}`);
        console.log(`HP:${barre_vie.repeat(playerCombat.hp > 0 ? playerCombat.hp : 0)}  ${playerCombat.hp} / ${maxHp}`);
        console.log("\n");
        console.log(`${enemy.name}`);
        console.log(`HP:${barre_vie.repeat(enemy.hp > 0 ? enemy.hp : 0)} ${enemy.hp} / ${hpMaxEnemy}`);
        fightId++;
        // console.log(`La vie de ${playerCombat.name} :${playerCombat.hp}`);
        // console.log(`La vie de ${enemy.name} :${enemy.hp}`);
        // console.log(`Le str de personnage ${playerCombat.str} et le str de l'enemie est ${enemy.str}`);
        const options = ["Attack", "Heal"]
        const choice = readline.keyInSelect(options, "Attack or Heal ?")
        console.log("\n");

        if (choice + 1 === 1) {
            if (playerCombat.hp <= maxHp) {
                
                enemy.hp = enemy.hp - playerCombat.str;   // attaque hero
            }

            console.log("Vous avez " + playerCombat.hp);

            if (enemy.hp <= 0) {
                enemy.hp = 0
                console.log("L'enemie à " + enemy.hp + "hp");
            } else if (playerCombat.hp <= 0) {
                playerCombat.hp = 0
                console.log("Vous avez " + playerCombat.hp + "hp");
            }


        }
        else if (choice + 1 === 2) {
            console.log("Vous avez " + playerCombat.hp + "hp");
            if (playerCombat.hp < maxHp) { //MAX - playerHp
                // playHp = max
                console.log("On va heal de " + (maxHp / 2));
                playerCombat.hp += (maxHp / 2);
                if(playerCombat.hp > maxHp)
                {
                    
                    playerCombat.hp = maxHp;
                }

                // playerCombat.hp += maxHp / 2; // La c'est pas bon, il faut bien faire ce truc !!!!
                // playerCombat.hp = playerCombat.hp - enemy.str;
            }
            else {
                console.log("Vous ne pouvez pas vous heal !");
            }
            if(playerCombat.hp <= 0)
            {
                playerCombat.hp = 0
                console.log("Vous avez " + playerCombat.hp + "hp");
            }
            console.log("Vous avez maintenant: " + playerCombat.hp + "hp");
        }
        else {
            console.log("Vous avez quitté");
            process.exit();
        }

        playerCombat.hp = playerCombat.hp - enemy.str; // attaque enemie
        // console.log("Il te reste " + playerCombat.hp + "hp");
        // console.log("\n");
        // if(enemy.hp === 0 && playerCombat.hp === 0)
        // {
        //     console.log("You lose\n");
        //     process.exit();
        // }
        if (enemy.hp === 0) {
            console.log(`Congratulations! You defeated ${enemy.name} !!\n`);
    
        } else if (playerCombat.hp === 0) {
            console.log("You lose\n");
            process.exit();
        }

    }
   
    
}
