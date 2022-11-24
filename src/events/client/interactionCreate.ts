import { Client, Interaction } from "discord.js";
import { handleSlashCommand } from "../../functions/handlers/handleSlashCommand";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};
