"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playerChoice_1 = require("./playerChoice");
var readline = require('readline-sync');
// let player: Character = getPlayer("../json/players.json")
function combat(playerCombatBoss, maxHp) {
    var boss = (0, playerChoice_1.getBoss)("../json/bosses.json");
    // maxHp = playerCombatBoss.hp;
    // let regenHp: number = 0; 
    var hpMaxBoss = boss.hp;
    // console.log('La vie de ennemy avant tout :' + enemy.hp);
    var fightId = 0;
    while (playerCombatBoss.hp > 0 && boss.hp > 0) {
        var barre_vie = "\x1b[36mI\x1b[0m";
        console.log("=================== FIGHT ".concat(fightId + 1, "  ==================="));
        console.log("\n");
        console.log("\u001B[34m".concat(playerCombatBoss.name, "\u001B[0m"));
        console.log("HP: ".concat(barre_vie.repeat(playerCombatBoss.hp > 0 ? playerCombatBoss.hp : 0), " \u001B[33m").concat(playerCombatBoss.hp, "\u001B[0m / \u001B[33m").concat(maxHp, "\u001B[0m"));
        console.log("\n");
        console.log("\u001B[31m".concat(boss.name, "\u001B[0m"));
        console.log("HP: ".concat(barre_vie.repeat(boss.hp > 0 ? boss.hp : 0), " \u001B[33m").concat(boss.hp, "\u001B[0m / \u001B[33m").concat(hpMaxBoss, "\u001B[0m"));
        fightId++;
        // console.log(`La vie de ${playerCombat.name} :${playerCombat.hp}`);
        // console.log(`La vie de ${enemy.name} :${enemy.hp}`);
        // console.log(`Le str de personnage ${playerCombat.str} et le str de l'enemie est ${enemy.str}`);
        var options = ["Attack", "Heal"];
        var choice = readline.keyInSelect(options, "Attack or Heal ?");
        console.log("\n");
        if (choice + 1 === 1) {
            if (playerCombatBoss.hp <= maxHp) {
                playerCombatBoss.hp = playerCombatBoss.hp - boss.str;
                boss.hp = boss.hp - playerCombatBoss.str;
            }
            console.log("Vous avez " + playerCombatBoss.hp + "hp");
            if (boss.hp <= 0) {
                boss.hp = 0;
                console.log("L'enemie à " + boss.hp + "hp");
            }
        }
        else if (choice + 1 === 2) {
            console.log("Vous avez " + playerCombatBoss.hp + "hp");
            if (playerCombatBoss.hp < maxHp) {
                // playHp = max
                console.log("On va heal de " + (maxHp / 2));
                playerCombatBoss.hp += (maxHp / 2);
                if (playerCombatBoss.hp > maxHp) {
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
        else {
            process.exit();
        }
        // console.log("Il te reste " + player.hp + "hp");
        // console.log("\n");
    }
    if (boss.hp === 0) {
        console.log("Congratulations! You defeated ".concat(boss.name, " !!\n"));
    }
    else {
        console.log("You lose\n");
        process.exit();
    }
}
exports.default = combat;
// combat()
