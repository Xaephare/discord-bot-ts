import { Client } from "discord.js";
import ready from "./events/client/ready";
import interactionCreate from "./events/client/interactionCreate";

require("dotenv").config();
const { TOKEN, TOKENTEST} = process.env;

console.log("Starting Bot...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(TOKEN);
