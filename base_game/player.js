"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function getPlayer(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var jsonObject = JSON.parse(content);
    for (var player in jsonObject) {
        if (jsonObject[player].name === "Link") {
            var character = jsonObject[player];
            return character;
        }
    }
}
exports.default = getPlayer;
// player("../json/players.json")
