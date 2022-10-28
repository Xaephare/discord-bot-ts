"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../structures/Command");
exports.default = new Command_1.Command({
    name: "ping",
    description: "Displays Bot's ping.",
    run: async ({ interaction }) => {
        interaction.followUp(`${interaction.client.ws.ping}ms`);
    }
});
