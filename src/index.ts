import { Client } from "discord.js";
import ready from "./events/client/ready";
import interactionCreate from "./events/client/interactionCreate";
import { connect } from "mongoose";

require("dotenv").config();
const { TOKEN, TOKENTEST, DATABASETOKEN } = process.env;

console.log("Starting Bot...");

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(TOKEN);

connect(DATABASETOKEN!).catch(console.error);
//TODO: run event handler on startup
