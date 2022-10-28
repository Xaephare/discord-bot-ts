import { Command } from "../../structures/Command";

export default new Command({
  name: "ping",
  description: "Displays Bot's ping.",
  run: async ({ interaction }) => {
    interaction.followUp(`${interaction.client.ws.ping}ms`);
  }
});
