"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_game_customization = void 0;
var floor_1 = require("./NormalDifficulty/floor");
var readline = require('readline-sync');
var difficultFloor_1 = require("../basic_game_customization/difficultDifficulty/difficultFloor");
var insaneFloor_1 = require("../basic_game_customization/insaneDifficulty/insaneFloor");
function basic_game_customization() {
    var options = ["New Game", "Exit"];
    var options1 = ["Normal", "Difficult", "Insane"];
    var choice = readline.keyInSelect(options, "You want to play a game ?");
    if (choice + 1 === 1) {
        var chooseDifficulty = readline.keyInSelect(options1, "Choose your difficulty");
        if (chooseDifficulty + 1 === 1) {
            (0, floor_1.default)();
        }
        else if (chooseDifficulty + 1 === 2) {
            (0, difficultFloor_1.default)();
        }
        else if (chooseDifficulty + 1 === 3) {
            (0, insaneFloor_1.default)();
        }
    }
    else {
        console.log("Vous avez quitté");
        process.exit();
    }
}
exports.basic_game_customization = basic_game_customization;
basic_game_customization();
