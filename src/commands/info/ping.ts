import { Command } from "../../structures/Command";

export default new Command({
  name: "ping",
  description: "Returns the bot's ping in milliseconds",
  run: async ({ interaction }) => {
    interaction.followUp(`${interaction.client.ws.ping}ms`);
  }
});
