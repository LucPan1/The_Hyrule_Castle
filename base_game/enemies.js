"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function enemies(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var jsonObject = JSON.parse(content);
    for (var player in jsonObject) {
        if (jsonObject[player].name === "Bokoblin") {
            var character = jsonObject[player];
            return character;
        }
    }
}
exports.default = enemies;
// enemies("../json/enemies.json")
