const fs = require('fs');
import Bosses from "./interface /boss";

export default function bosses(path: any)
{
    const content = fs.readFileSync(path, 'utf-8');
    const jsonObject: Bosses[] = JSON.parse(content);

    for(let player in jsonObject)
    {
        if(jsonObject[player].name === "Ganon")
        {
            const character = jsonObject[player]
            return character;
        }
       
    }
   
}

bosses("../json/bosses.json")
