import {CommandInteraction, Client, Interaction} from "discord.js";
import interaction_create from "./interactionCreate";
import {Commands} from "../commands/Commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction)
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName)
    if (!slashCommand) {
        console.error("Command does not exist.")
        await interaction.reply({content: `Command "${interaction.commandName}" does not exist.`, ephemeral: true})
        return;
    }
    try {
        await slashCommand.run(client, interaction)
    }
    catch (error) {
        console.error(error)
        await interaction.reply({content: "There was an error while executing this command."})
    }
}