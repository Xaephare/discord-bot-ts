import {Client, ClientOptions} from "discord.js";
import ready from "./events/ready";
import interactionCreate from "./events/interactionCreate";

require('dotenv').config()

console.log("Starting Bot...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client)

client.login(process.env.TOKEN);
