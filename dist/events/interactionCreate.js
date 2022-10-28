"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("../structures/Event");
const __1 = require("..");
exports.default = new Event_1.Event("interactionCreate", async (interaction) => {
    // Chat Input Commands
    if (interaction.isCommand()) {
        await interaction.deferReply();
        const command = __1.client.commands.get(interaction.commandName);
        if (!command)
            return interaction.followUp("Command not found");
        command.run({
            args: interaction.options,
            client: __1.client,
            interaction: interaction,
        });
    }
});
