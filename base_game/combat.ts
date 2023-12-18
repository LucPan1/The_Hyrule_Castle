import { getEnemy } from "./playerChoice";
const readline = require("readline-sync");
import Character from "./interface /character";
import Enemies from "./interface /enemies";

export default function combat(playerCombat: Character, maxHp: number) {
  let enemy: Enemies = getEnemy("../json/enemies.json");

  const hpMaxEnemy = enemy.hp;
  let fightId: number = 0;
  while (playerCombat.hp > 0 && enemy.hp > 0) {
    let barre_vie: string = "\x1b[36mI\x1b[0m";

    console.log(`=================== FIGHT ${fightId + 1}  ===================`);
    console.log("\n");
    console.log(`\x1b[34m${playerCombat.name}\x1b[0m`);
    console.log(
      `HP: ${barre_vie.repeat(playerCombat.hp > 0 ? playerCombat.hp : 0)} \x1b[33m${
        playerCombat.hp
      }\x1b[0m / \x1b[33m${maxHp}\x1b[0m`
    );
    console.log("\n");
    console.log(`\x1b[31m${enemy.name}\x1b[0m`);
    console.log(
      `HP: ${barre_vie.repeat(enemy.hp > 0 ? enemy.hp : 0)} \x1b[33m${
        enemy.hp
      }\x1b[0m / \x1b[33m${hpMaxEnemy}\x1b[0m`
    );
    fightId++;

    const options = ["Attack", "Heal"];
    const choice = readline.keyInSelect(options, "Attack or Heal ?");
    console.log("\n");

    if (choice + 1 === 1) {
      if (playerCombat.hp <= maxHp) {
        playerCombat.hp = playerCombat.hp - enemy.str; // attaque enemie
        enemy.hp = enemy.hp - playerCombat.str; // attaque hero
      }

      console.log("Vous avez " + playerCombat.hp + "hp");

      if (enemy.hp <= 0) {
        enemy.hp = 0;
        console.log("L'enemie à " + enemy.hp + "hp");
      } else if (playerCombat.hp <= 0) {
        playerCombat.hp = 0;
        console.log("Vous avez " + playerCombat.hp + "hp");
      }
    } else if (choice + 1 === 2) {
      console.log("Vous avez " + playerCombat.hp + "hp");
      if (playerCombat.hp < maxHp) {
        console.log("On va heal de " + maxHp / 2);
        playerCombat.hp += maxHp / 2;
        if (playerCombat.hp > maxHp) {
          playerCombat.hp = maxHp;
        }

        playerCombat.hp = playerCombat.hp - enemy.str;
      } else {
        console.log("Vous ne pouvez pas vous heal !");
      }
      if (playerCombat.hp <= 0) {
        playerCombat.hp = 0;
        console.log("Vous avez " + playerCombat.hp + "hp");
      }
      console.log("Vous avez maintenant: " + playerCombat.hp + "hp");
    } else {
      console.log("Vous avez quitté");
      process.exit();
    }
  }
  if (enemy.hp === 0 && playerCombat.hp === 0) {
    console.log("You lose\n");
    process.exit();
  } else if (enemy.hp === 0) {
    console.log(`Congratulations! You defeated ${enemy.name} !!\n`);
  } else if (playerCombat.hp === 0) {
    console.log("You lose\n");
    process.exit();
  }
}
