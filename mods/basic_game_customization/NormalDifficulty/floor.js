"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var combatBoss_1 = require("./combatBoss");
var combatBoss_2 = require("./combatBoss");
var playerChoice_1 = require("../../../base_game/playerChoice");
var fs = require('fs');
function floor() {
    // getPlayer 
    var player = (0, playerChoice_1.getPlayer)("../../json/players.json");
    var maxHp = player.hp;
    for (var i = 1; i < 10; i++) {
        (0, combatBoss_1.default)(player, maxHp);
    }
    for (var i = 1; i < 2; i++) {
        (0, combatBoss_2.default)(player, maxHp);
    }
}
exports.default = floor;
// floor()
