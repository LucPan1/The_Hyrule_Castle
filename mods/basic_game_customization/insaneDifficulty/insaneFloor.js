"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var insaneCombatEnemies_1 = require("./insaneCombatEnemies");
var insaneCombatBoss_1 = require("./insaneCombatBoss");
var playerChoice_1 = require("../../../base_game/playerChoice");
var fs = require('fs');
function floor() {
    // getPlayer 
    var player = (0, playerChoice_1.getPlayer)("../../json/players.json");
    var maxHp = player.hp;
    for (var i = 1; i < 3; i++) {
        (0, insaneCombatEnemies_1.default)(player, maxHp);
    }
    for (var i = 1; i < 2; i++) {
        (0, insaneCombatBoss_1.default)(player, maxHp);
    }
}
exports.default = floor;
// floor()
