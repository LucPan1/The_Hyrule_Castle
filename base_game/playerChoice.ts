import player from "./interface /character";
import Boss from "./interface /boss";
import Enemy from "./interface /enemies";
const fs = require('fs');


function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

export function getPlayer(path: string) {
    try {
        const rarety: any = playerchoice();
        const content: any = fs.readFileSync(path, "utf-8");
        const jsonObject: player = JSON.parse(content);
        const players: player[] = [];
        for (let p in jsonObject) {
            if (rarety === jsonObject[p].rarity) {
                players.push(jsonObject[p]);
            }
        }
        const random = Math.floor(Math.random() * players.length);

        return players[random];
    } catch(error) {
        console.error("WrongP use of the program.");
    }
}

export function getEnemy(path: string) {
    try {
        const rarety: any = playerchoice();
        const content: any = fs.readFileSync(path, "utf-8");
        const jsonObject: Enemy = JSON.parse(content);
        const Enemies: Enemy[] = [];
        for (let p in jsonObject) {
            if (rarety === jsonObject[p].rarity) {
                Enemies.push(jsonObject[p]);
            }
        }
        const random = Math.floor(Math.random() * Enemies.length);

        return Enemies[random];
    } catch {
        console.error("WrongE use of the program.");
    }
}

export function getBoss(path: string) {
    try {
        const rarety: any = playerchoice();
        const content: any = fs.readFileSync(path, "utf-8");
        const jsonObject: Boss = JSON.parse(content);
        const boss: Boss[] = [];
        for (let p in jsonObject) {
            if (rarety === jsonObject[p].rarity) {
                boss.push(jsonObject[p]);
            }
        }
        const random = Math.floor(Math.random() * boss.length);

        return boss[random];
    } catch {
        console.error("WrongB use of the program.");
    }
}


export function playerchoice() {
    // choix des personnage aleatoire en fonction de leur rarete 
    // chercher les player en fonction de leur rarete ()
    const aleatoire: number = getRandomNumber(0, 100);
    let res;


    if (aleatoire >= 0 && aleatoire <= 49) { //0 à 49 == 50
        res = 1;

    } else if (aleatoire >= 50 && aleatoire < 80) { //  50 à 80 == 30
        res = 2;
    } else if (aleatoire >= 80 && aleatoire < 95) { // 80 à 95 == 15
        res = 3;
    } else if (aleatoire >= 95 && aleatoire < 99) { //95 à 99 == 4
        res = 4;
    } else if (aleatoire >= 99 && aleatoire < 100) { //99 à 100 ==1
        res = 5;
    }
    return res;


}

