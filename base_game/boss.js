"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function bosses(path) {
    var content = fs.readFileSync(path, 'utf-8');
    var jsonObject = JSON.parse(content);
    for (var player in jsonObject) {
        if (jsonObject[player].name === "Ganon") {
            var character = jsonObject[player];
            return character;
        }
    }
}
exports.default = bosses;
bosses("../json/bosses.json");
