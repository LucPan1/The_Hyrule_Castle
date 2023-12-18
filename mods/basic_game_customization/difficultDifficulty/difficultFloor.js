"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var difficultCombat_1 = require("./difficultCombat");
var difficultCombatBoss_1 = require("./difficultCombatBoss");
var playerChoice_1 = require("../../../base_game/playerChoice");
var fs = require('fs');
function floor() {
    // getPlayer 
    var player = (0, playerChoice_1.getPlayer)("../../json/players.json");
    var maxHp = player.hp;
    for (var i = 1; i < 10; i++) {
        (0, difficultCombat_1.default)(player, maxHp);
    }
    for (var i = 1; i < 2; i++) {
        (0, difficultCombatBoss_1.default)(player, maxHp);
    }
}
exports.default = floor;
// floor()
