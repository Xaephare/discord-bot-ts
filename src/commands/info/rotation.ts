import {Command} from "../../structures/Command";

export default new Command({
  name: "rotation",
  description: "Displays current ApexLegends map rotation.",
  run: async ({ interaction }) => {
    const axios = require("axios");
    const base_url = "https://api.mozambiquehe.re/";
    axios({
      method: "get",
      url: base_url + "maprotation",
      headers: {
        Authorization: process.env.apexMapToken,
      },
      params: {
        version: "2",
      },
    })
      .then((response) => {
        const data = response["data"];
        const currentBr = {
          map: data.battle_royale.current.map,
          remainingMins: data.battle_royale.current.remainingMins,
        };
        const nextBr = {
          map: data.battle_royale.next.map,
        };
        const currentRanked = {
          map: data.ranked.current.map,
          remainingMins: data.ranked.current.remainingMins,
        };
        const nextRanked = {
          map: data.ranked.next.map,
        };
        console.log(timeConverter(currentBr.remainingMins));
        interaction.followUp(`
__**Battle Royale**__
    *On now:*
    \`${currentBr.map}\`
    *Upcoming:*
    \`${nextBr.map}\` in \`${currentBr.remainingMins}\` min
    
__**Ranked**__
    *On now:*
    \`${currentRanked.map}\`
    *Upcoming:*
    \`${nextRanked.map}\` in \`${currentRanked.remainingMins}\` min
`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

function timeConverter(minutes: number) {
    if (minutes > 60) {
        let hours: number = Math.floor(minutes / 60)
        let remainderMinutes: number = minutes % 60

        return [hours, remainderMinutes];
    }
}
