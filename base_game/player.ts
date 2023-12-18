const fs = require('fs');
import Character from "./interface /character";

export default function getPlayer(path: any)
{
    const content = fs.readFileSync(path, 'utf-8');
    const jsonObject: Character[] = JSON.parse(content);

    for(let player in jsonObject)
    {
        if(jsonObject[player].name === "Link")
        {
            const character: Character = jsonObject[player];
            return character;
        }
    }
}

// player("../json/players.json")
