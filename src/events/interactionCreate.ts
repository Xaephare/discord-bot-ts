import { ExtendedInteraction } from "../typings/Command";
import { Event } from "../structures/Event";
import { client } from "..";
import { CommandInteractionOptionResolver } from "discord.js";

export default new Event("interactionCreate", async (interaction) => {
  // Chat Input Commands
  if (interaction.isCommand()) {
    await interaction.deferReply();
    const command = client.commands.get(interaction.commandName);
    if (!command) return interaction.followUp("Command not found");

    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as ExtendedInteraction,
    });
  }
});
