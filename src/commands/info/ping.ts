import {Command} from "src/structures/Command";
import {Client, CommandInteraction} from "discord.js";

export const Ping: Command = {
    name: "ping",
    description: "Displays bot ping.",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = `${interaction.client.ws.ping}ms`

        await interaction.reply({
            ephemeral: true,
            content
        })
    }
}
