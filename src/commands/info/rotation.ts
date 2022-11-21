import {Command} from "../../structures/Command";
import {Client, CommandInteraction} from "discord.js";

export const Rotation: Command = {
    name: "rotation",
    description: "Displays current ApexLegends map rotation.",
    run: async (client: Client, interaction: CommandInteraction) => {
        const axios = require("axios");
        const base_url = "https://api.mozambiquehe.re/";
        axios({
            method: "get",
            url: base_url + "maprotation",
            headers: {
                Authorization: process.env.APEXMAPTOKEN,
            },
            params: {
                version: "2",
            },
        })
            .then((response: any) => {
                const data = response["data"];
                const currentBr = {
                    map: data.battle_royale.current.map,
                    remainingTime: data.battle_royale.current.remainingSecs
                };
                const nextBr = {
                    map: data.battle_royale.next.map,
                };
                const currentRanked = {
                    map: data.ranked.current.map,
                    remainingTime: data.ranked.current.remainingSecs
                };
                const nextRanked = {
                    map: data.ranked.next.map,
                };
                interaction.reply(`
__**Battle Royale**__
    *On now:*
    \`${currentBr.map}\`
    *Upcoming:*
    \`${nextBr.map}\` ${stringify(currentBr.remainingTime)}
    
__**Ranked**__
    *On now:*
    \`${currentRanked.map}\`
    *Upcoming:*
    \`${nextRanked.map}\` ${stringify(currentRanked.remainingTime)}
`);
            })
            .catch((error: Error) => {
                console.log(error);
            });
    },

}

function stringify(seconds: number): string {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const dayWord = plurify("day", days);
    const hourWord = plurify("hour", hours);
    const minuteWord = plurify("minute", minutes);

    if (days > 0) {
        return `in \`${days}\` ${dayWord}, \`${hours}\` ${hourWord} and \`${minutes}\` ${minuteWord}`;
    } else if (hours > 0) {
        return `in \`${hours}\` ${hourWord} and \`${minutes}\` ${minuteWord}`;
    } else if (minutes > 0 && hours === 0) {
        return `in \`${minutes}\` ${minuteWord}`;
    }
    else {
        return `in \`${seconds}\` seconds`;
    }
}

function plurify(word: string, count: number): string {
    if (count === 1) {
        return word;
    } else {
        return word + "s";
    }
}