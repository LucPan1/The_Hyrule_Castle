const fs = require('fs');
import Enemies from "./interface /enemies";

export default function enemies(path: any)
{
    const content = fs.readFileSync(path, 'utf-8');
    const jsonObject: Enemies[] = JSON.parse(content);

    for(let player in jsonObject)
    {
        if(jsonObject[player].name === "Bokoblin")
        {
            const character = jsonObject[player]; 
            return character;
        }
        
    }
}

// enemies("../json/enemies.json")
