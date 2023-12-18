import getFloor from "./NormalDifficulty/floor"
const readline = require('readline-sync');
import getFloorDifficult from "../basic_game_customization/difficultDifficulty/difficultFloor"
import getFloorInsane from "../basic_game_customization/insaneDifficulty/insaneFloor"

export function basic_game_customization()
{
    const options = ["New Game", "Exit"]
    const options1 = ["Normal", "Difficult", "Insane"]
    const choice = readline.keyInSelect(options, "You want to play a game ?")
    if (choice + 1 === 1)
    {
        const chooseDifficulty = readline.keyInSelect(options1, "Choose your difficulty")
        if (chooseDifficulty + 1 === 1)
        {
        getFloor()
        }
        else if(chooseDifficulty + 1 === 2)
        {
            getFloorDifficult()
        }
        else if (chooseDifficulty + 1 === 3) {
            getFloorInsane()
        }
    }
   
    else 
    {
        console.log("Vous avez quitté");
        process.exit();
    }
    
}

basic_game_customization();