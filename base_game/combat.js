"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playerChoice_1 = require("./playerChoice");
var readline = require("readline-sync");
function combat(playerCombat, maxHp) {
    var enemy = (0, playerChoice_1.getEnemy)("../json/enemies.json");
    var hpMaxEnemy = enemy.hp;
    var fightId = 0;
    while (playerCombat.hp > 0 && enemy.hp > 0) {
        var barre_vie = "\x1b[36mI\x1b[0m";
        console.log("=================== FIGHT ".concat(fightId + 1, "  ==================="));
        console.log("\n");
        console.log("\u001B[34m".concat(playerCombat.name, "\u001B[0m"));
        console.log("HP: ".concat(barre_vie.repeat(playerCombat.hp > 0 ? playerCombat.hp : 0), " \u001B[33m").concat(playerCombat.hp, "\u001B[0m / \u001B[33m").concat(maxHp, "\u001B[0m"));
        console.log("\n");
        console.log("\u001B[31m".concat(enemy.name, "\u001B[0m"));
        console.log("HP: ".concat(barre_vie.repeat(enemy.hp > 0 ? enemy.hp : 0), " \u001B[33m").concat(enemy.hp, "\u001B[0m / \u001B[33m").concat(hpMaxEnemy, "\u001B[0m"));
        fightId++;
        var options = ["Attack", "Heal"];
        var choice = readline.keyInSelect(options, "Attack or Heal ?");
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
            }
            else if (playerCombat.hp <= 0) {
                playerCombat.hp = 0;
                console.log("Vous avez " + playerCombat.hp + "hp");
            }
        }
        else if (choice + 1 === 2) {
            console.log("Vous avez " + playerCombat.hp + "hp");
            if (playerCombat.hp < maxHp) {
                console.log("On va heal de " + maxHp / 2);
                playerCombat.hp += maxHp / 2;
                if (playerCombat.hp > maxHp) {
                    playerCombat.hp = maxHp;
                }
                playerCombat.hp = playerCombat.hp - enemy.str;
            }
            else {
                console.log("Vous ne pouvez pas vous heal !");
            }
            if (playerCombat.hp <= 0) {
                playerCombat.hp = 0;
                console.log("Vous avez " + playerCombat.hp + "hp");
            }
            console.log("Vous avez maintenant: " + playerCombat.hp + "hp");
        }
        else {
            console.log("Vous avez quitté");
            process.exit();
        }
    }
    if (enemy.hp === 0 && playerCombat.hp === 0) {
        console.log("You lose\n");
        process.exit();
    }
    else if (enemy.hp === 0) {
        console.log("Congratulations! You defeated ".concat(enemy.name, " !!\n"));
    }
    else if (playerCombat.hp === 0) {
        console.log("You lose\n");
        process.exit();
    }
}
exports.default = combat;
