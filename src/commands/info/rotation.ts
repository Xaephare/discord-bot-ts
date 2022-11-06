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
                    remainingTime: data.battle_royale.current.remainingTimer.split(":", 2), //[Hours, Minutes]
                };
                const nextBr = {
                    map: data.battle_royale.next.map,
                };
                const currentRanked = {
                    map: data.ranked.current.map,
                    remainingTime: data.ranked.current.remainingTimer.split(":", 2), //[Hours, Minutes]
                };
                const nextRanked = {
                    map: data.ranked.next.map,
                };
                interaction.reply(`
__**Battle Royale**__
    *On now:*
    \`${currentBr.map}\`
    *Upcoming:*
    \`${nextBr.map}\` in \`${currentBr.remainingTime[0]}\` hours, \`${currentBr.remainingTime[1]}\` minutes
    
__**Ranked**__
    *On now:*
    \`${currentRanked.map}\`
    *Upcoming:*
    \`${nextRanked.map}\` in \`${currentRanked.remainingTime[0]}\` hours, \`${currentRanked.remainingTime[1]}\` minutes
`);
            })
            .catch((error: Error) => {
                console.log(error);
            });
    },
}