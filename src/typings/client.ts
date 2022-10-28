import {
  ApplicationCommandDataResolvable,
  Client,
  Collection,
} from "discord.js";

export interface registerCommandsOptions {
  guildId: string;
  commands: ApplicationCommandDataResolvable[];
}
