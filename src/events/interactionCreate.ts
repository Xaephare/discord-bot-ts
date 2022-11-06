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
        interaction.followUp({content: "Command does not exist."})
        return;
    }

    //await interaction.deferReply();

    slashCommand.run(client, interaction);
}